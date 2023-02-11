"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const eks = require("@pulumi/eks");

// Create an AWS resource (S3 Bucket)
// const buckets = ["bucket-one", "bucket-two", "bucket-three"];
// const export_buckets = [];

// buckets.forEach(b => export_buckets.push(new aws.s3.Bucket(b)));

// Export the name of the bucket
// exports.bucketName = export_buckets;
const vpc = new awsx.ec2.Vpc('vpc',{})
const cluster = new eks.Cluster('cluster',{
    vpcId: vpc.vpcId,
    publicSubnetIds: vpc.publicSubnetIds,
    privateSubnetIds: vpc.privateSubnetIds,
    nodeAssociatePublicIpAddress: false,
    desiredCapacity: 5,
    minSize: 3,
    maxSize: 5,
    enabledClusterLogTypes: [
        "api",
        "audit",
        "authenticator",
    ],
})

exports.kubeconfig = cluster.kubeconfig