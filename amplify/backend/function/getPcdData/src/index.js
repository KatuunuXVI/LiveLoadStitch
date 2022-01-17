/* Amplify Params - DO NOT EDIT
	AUTH_LIVELOADFRONTENDC7B5F1B6_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const { Client } = require('pg');
const jwt_decode = require('jwt-decode');


exports.handler = async (event) => {
    // TODO implement
    var params = { 
    Bucket: 'dev-pcls',
    }
    
    // Collects data from S3, should pass this to frontend
    let p = await s3.listObjectsV2(params).promise();
 
    const client = new Client({
        user: 'schleptech',
        host: 'database-1.cknku1ecbjw4.us-east-2.rds.amazonaws.com',
        database: 'demo',
        password: 'schleptech',
        port: 5432
    });
    await client.connect();
    
    let userInfo = jwt_decode(event.headers.authorization);
    
    let x = "SELECT volume FROM productivity LIMIT 1";
    return x;

};