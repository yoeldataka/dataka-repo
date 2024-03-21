"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.getUser = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_service_1 = require("./app.service");
const getUser = async (event, _context, _callback) => {
    const appContext = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const appService = appContext.get(app_service_1.AppService);
    const { id } = event.pathParameters;
    try {
        const res = await appService.getUser(id);
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
exports.getUser = getUser;
const getUsers = async (_event, _context, _callback) => {
    const appContext = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const appService = appContext.get(app_service_1.AppService);
    try {
        const res = await appService.getUsers();
        return {
            statusCode: common_1.HttpStatus.OK,
            body: 'aupa',
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
exports.getUsers = getUsers;
//# sourceMappingURL=main.js.map