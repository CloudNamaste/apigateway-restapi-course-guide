import json
import boto3


def lambda_handler(event, context):
    print(event)
    first_name = None
    if "first_name" in event:
        first_name = event["first_name"]
    
    last_name = None
    if "last_name" in event:
        last_name = event["last_name"]
        print(last_name)
    
    address = None
    if "address" in event:
        address = event["address"]
    
    course = None
    if "course" in event:
        course = event["course"]

    email = None
    if "email" in event:
        email = event["email"]

    operation = None
    if "operation" in event:
        operation = event["operation"]
    
    
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
                    'course': course,
                    'email': email,
                    'firstName': first_name,
                    'lastName': last_name,
                    'address': address,
                }
            )
        elif operation == 'get':
            print('Get subscriber ....')
            
            response = table.get_item(
                Key = {
                    'course': course,
                    'email': email
                })
            
        elif operation == 'update':
            print('Updating subscriber adddress ....')

            response = table.update_item(
                Key={
                    'course': course,
                    'email': email
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
                    'course': course,
                    'email': email
                }
            )
    except:
        raise
    
    return response
