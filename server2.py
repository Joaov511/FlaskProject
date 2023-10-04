from flask import Flask, jsonify,request,Response, redirect, render_template
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/signup', methods=['POST'])
@cross_origin(supports_credentials=True)
def AddNewUser():
    
    username = request.get_json()['username']
    email = request.get_json()['email']
    password = request.get_json()['password']
    
    userFile = open('usersData.txt','a')
    userFile.write(username + "," + email + "," + password + "\n")
    userFile.close()
    return Response(status=201)


@app.route('/login', methods=['POST'])
@cross_origin(supports_credentials=True)
def checkUserData():
    email = request.get_json()['email']
    password = request.get_json()['password']
    
    userFile = open('usersData.txt','r')
    lines = userFile.readlines()

    userExists = 'false'
        
    for line in lines:
       if line.__contains__(email) and line.__contains__(password):
            userExists = 'true'  
    
    userFile.close()
    if userExists == 'true':
        return Response(status=201)
    else: 
        return Response(status=202)
    

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3085)