"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
const db = new aws_sdk_1.DynamoDB.DocumentClient({
    convertEmptyValues: true,
    paramValidation: true,
});
let AppService = class AppService {
    async getUser(id) {
        const res = await db
            .get({
            TableName: process.env.DYNAMODB_TABLE,
            Key: { id },
            AttributesToGet: ['id', 'email', 'firstName', 'lastName'],
        })
            .promise();
        if (res.$response.error || !res.Item) {
            throw new common_1.InternalServerErrorException(res.$response.error);
        }
        return res.Item;
    }
    async getUsers() {
        const res = await db
            .scan({
            TableName: process.env.DYNAMODB_TABLE,
            AttributesToGet: ['id', 'email', 'firstName', 'lastName'],
        })
            .promise();
        if (res.$response.error) {
            throw new common_1.InternalServerErrorException(res.$response.error.message);
        }
        return res.Items;
    }
    async getHello() {
        return 'Hello!';
    }
    async getPost() {
        return 'post!';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map