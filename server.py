from flask import Flask, jsonify,request,Response, redirect, render_template
from flask_cors import CORS, cross_origin
from flask_mysqldb import MySQL

app = Flask(__name__)

mysql = MySQL(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = 'flask'

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
    
@app.route('/login', methods=['POST'])
@cross_origin(supports_credentials=True)
def checkUserData2():
    email = request.get_json()['email']
    password = request.get_json()['password']
    
    cursor = mysql.connection.cursor()
    cursor.execute(f'select * from user where email="{email}" and password="{password}";')
    data = cursor.fetchone()
    mysql.connection.commit()
    cursor.close()

    if data is None:
        userExists = 'false'
    else:
        userExists = 'true'
    
    if userExists == 'true':
        return Response(status=201)
    else: 
        return Response(status=202)
    

@app.route('/signup', methods=['POST'])
@cross_origin(supports_credentials=True)
def AddNewUser2():
    username = request.get_json()['username']
    email = request.get_json()['email']
    password = request.get_json()['password']

    cursor = mysql.connection.cursor()
    cursor.execute(f'insert into user(username,email,password) values("{username}","{email}","{password}")')
    mysql.connection.commit()
    cursor.close()
    
    return Response(status=201)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3085)