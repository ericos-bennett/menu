resource "aws_lambda_function" "get_recipe" {
  filename         = "${path.module}/${var.environment}/get_recipe.zip"
  function_name    = "GetRecipe"
  role             = aws_iam_role.get_recipe.arn
  handler          = "index.handler"
  source_code_hash = filebase64sha256("${path.module}/${var.environment}/get_recipe.zip")
  runtime          = "nodejs20.x"
  timeout          = 30
  environment {
    variables = {
      AWS_REGION               = var.aws_region
      LAMBDA_DYNAMODB_ENDPOINT = var.lambda_dynamodb_endpoint
    }
  }
}

resource "aws_lambda_permission" "get_recipe" {
  statement_id  = "AllowAPIGatewayInvokeGetRecipe"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.get_recipe.arn
  principal     = "apigateway.amazonaws.com"
}

resource "aws_lambda_function" "get_recipes" {
  filename         = "${path.module}/${var.environment}/get_recipes.zip"
  function_name    = "GetRecipes"
  role             = aws_iam_role.get_recipes.arn
  handler          = "index.handler"
  source_code_hash = filebase64sha256("${path.module}/${var.environment}/get_recipes.zip")
  runtime          = "nodejs20.x"
  timeout          = 30
  environment {
    variables = {
      AWS_REGION               = var.aws_region
      LAMBDA_DYNAMODB_ENDPOINT = var.lambda_dynamodb_endpoint
    }
  }
}

resource "aws_lambda_permission" "get_recipes" {
  statement_id  = "AllowAPIGatewayInvokeGetRecipes"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.get_recipes.arn
  principal     = "apigateway.amazonaws.com"
}

resource "aws_lambda_function" "create_recipe" {
  filename         = "${path.module}/${var.environment}/create_recipe.zip"
  function_name    = "CreateRecipe"
  role             = aws_iam_role.create_recipe.arn
  handler          = "index.handler"
  source_code_hash = filebase64sha256("${path.module}/${var.environment}/create_recipe.zip")
  runtime          = "nodejs20.x"
  timeout          = 30
  environment {
    variables = {
      AWS_REGION                     = var.aws_region,
      LAMBDA_SECRETSMANAGER_ENDPOINT = var.lambda_secretsmanager_endpoint,
      LAMBDA_DYNAMODB_ENDPOINT       = var.lambda_dynamodb_endpoint,
      OPENAI_API_KEY_ID              = aws_secretsmanager_secret.openai_api_key.id,
    }
  }
}

resource "aws_lambda_permission" "create_recipe" {
  statement_id  = "AllowAPIGatewayInvokeCreateRecipe"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.create_recipe.arn
  principal     = "apigateway.amazonaws.com"
}
