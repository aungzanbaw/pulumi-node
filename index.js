"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

// Create an AWS resource (S3 Bucket)
// const buckets = ["bucket-one", "bucket-two", "bucket-three"];
// const export_buckets = [];

// buckets.forEach(b => export_buckets.push(new aws.s3.Bucket(b)));

// Export the name of the bucket
// exports.bucketName = export_buckets;
