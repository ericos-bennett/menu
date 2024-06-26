variable "openai_api_key" {
  type      = string
  nullable  = false
  sensitive = true
}
variable "aws_access_key" {
  type     = string
  nullable = false
}
variable "aws_secret_key" {
  type     = string
  nullable = false
}
variable "aws_region" {
  type     = string
  nullable = false
}
variable "environment" {
  type     = string
  nullable = false
}
variable "iam_endpoint" {
  type     = string
  nullable = false
}
variable "cloudfront_endpoint" {
  type     = string
  nullable = false
}
variable "s3_endpoint" {
  type     = string
  nullable = false
}
variable "apigateway_endpoint" {
  type     = string
  nullable = false
}
variable "secretsmanager_endpoint" {
  type     = string
  nullable = false
}
variable "lambda_endpoint" {
  type     = string
  nullable = false
}
variable "lambda_secretsmanager_endpoint" {
  type     = string
  nullable = false
}
variable "lambda_dynamodb_endpoint" {
  type     = string
  nullable = false
}
variable "dynamodb_endpoint" {
  type     = string
  nullable = false
}
