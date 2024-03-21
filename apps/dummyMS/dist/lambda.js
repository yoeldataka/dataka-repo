"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const app_module_1 = require("./app.module");
const handler = async (event, context) => {
    console.log('event: ', event);
    console.log('context: ', context);
    const appContext = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const appService = appContext.get(app_service_1.AppService);
    try {
        const res = await appService.getHello();
        return {
            statusCode: common_1.HttpStatus.OK,
            body: JSON.stringify(res),
        };
    }
    catch (error) {
        console.log(error);
        return {
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            body: JSON.stringify(error.response ?? error.message),
        };
    }
};
exports.handler = handler;
//# sourceMappingURL=lambda.js.map