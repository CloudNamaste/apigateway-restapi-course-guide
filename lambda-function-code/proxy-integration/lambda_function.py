import json
import boto3


def lambda_handler(event, context):
    print(event)
    operation = event["queryStringParameters"]["operation"]
    body = json.loads( event["body"])
    
    dynamodb = boto3.resource('dynamodb')
    
    try:
        table = dynamodb.Table('subscribers')
        
        if operation == 'scan':
            print('List subscribers....')
            response = table.scan()
            
        if operation == 'add':
            print('Subscribing user....')
            
            response = table.put_item(
               Item={
                    'course': body["course"],
                    'email': body["email"],
                    'firstName': body["first_name"],
                    'lastName': body["last_name"],
                    'address': body["address"],
                }
            )
        elif operation == 'get':
            print('Get subscriber ....')
            
            response = table.get_item(
                Key = {
                    'course': event["queryStringParameters"]["course"],
                    'email': event["queryStringParameters"]["email"]
                })
            
        elif operation == 'update':
            print('Updating subscriber adddress ....')

            response = table.update_item(
                Key={
                    'course': body["course"],
                    'email': body["email"]
                },
                UpdateExpression = 'set address = :val1',
                ExpressionAttributeValues = {
                    ':val1': address
                },
                ReturnValues = 'ALL_NEW'
            )

        elif operation == 'delete':
            print('deleting subscriber ....')

            response = table.delete_item(
                Key={
                    'course': event["queryStringParameters"]["course"],
                    'email': event["queryStringParameters"]["email"]
                }
            )
    except:
        raise
    
    final_response = {
        'statusCode' : 200,
        'body': json.dumps(response),
        'headers' : {
            'Access-Control-Allow-Origin' :'*',
            'Access-Control-Allow-Method' :'GET,PUT,POST,DELETE,OPTIONS'
        }
    }
    print(final_response)
    return final_response
