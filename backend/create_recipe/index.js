const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Update this to call OpenAI API
const getRecipeJson = (recipeUrl) => {
  const filePath = path.join(__dirname, 'testRecipe.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

exports.handler = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient({
    region: process.env.AWS_REGION,
    endpoint: process.env.LAMBDA_DYNAMODB_ENDPOINT
  });

  headers = {
    'Access-Control-Allow-Origin': '*'
  }

  try {
    const { recipeUrl } = JSON.parse(event.body);
    recipeItem = getRecipeJson(recipeUrl)
    const params = {
      TableName: 'Recipes',
      Item: recipeItem
    };
    await dynamodb.put(params).promise();
    console.log(`Item from URL {${recipeUrl}} added to Recipes table!`)
    return {
      statusCode: 201,
      body: recipeItem,
      headers
    };

  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify(error),
      headers
    };
  }
};