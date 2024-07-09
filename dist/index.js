import AdminJS, { ComponentLoader } from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSSequelize from "@adminjs/sequelize";
import express from "express";
import SubscriptionPlatform from "./Models/subscriptionPlatform.entity.js";
import { Coupon } from "./Models/coupons.entity.js";
import Brand from "./Models/brand.entity.js";
import ConnectSession from "connect-session-sequelize";
import session from "express-session";
import Advertisement from "./Models/advertisement.entity.js";
import User from "./Models/users.entity.js";
import { syncModels } from "./config/database/sync_model.js";
import postgresConnect from "./config/database/connection.js";
import Budget from "./Models/budget.entity.js";
const PORT = 3000;
const componentLoader = new ComponentLoader();
const DEFAULT_ADMIN = {
    email: "admin@example.com",
    password: "password",
};
const SubscriptionPlatformFormComponent = componentLoader.add("SubscriptionPlatformForm", "./components/SubscriptionPlatformForm.jsx");
AdminJS.registerAdapter({
    Resource: AdminJSSequelize.Resource,
    Database: AdminJSSequelize.Database,
});
const authenticate = async (email, password) => {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN);
    }
    return null;
};
const start = async () => {
    const app = express();
    await syncModels();
    const usersNavigation = {
        name: 'Users',
    };
    const admin = new AdminJS({
        resources: [
            {
                resource: User,
                options: {
                    properties: {
                        username: {
                            isVisible: { list: true, show: true, edit: true, filter: true },
                        },
                        email: {
                            isVisible: { list: true, show: true, edit: true, filter: true },
                        },
                        mobilenumber: {
                            isVisible: {
                                list: false,
                                show: false,
                                edit: true,
                                filter: false,
                            },
                        },
                        saveyaar_plan_id: {
                            isVisible: {
                                list: false,
                                show: false,
                                edit: true,
                                filter: false,
                            },
                        },
                        saveyaar_plan_expiry_date: {
                            isVisible: {
                                list: false,
                                show: false,
                                edit: true,
                                filter: false,
                            },
                        },
                        profile_url: {
                            isVisible: {
                                list: false,
                                show: false,
                                edit: false,
                                filter: false,
                            },
                        },
                        updated_at: {
                            isVisible: {
                                list: false,
                                show: true,
                                edit: false,
                                filter: true,
                            },
                        },
                        created_at: {
                            isVisible: {
                                list: false,
                                show: true,
                                edit: false,
                                filter: true,
                            },
                        },
                    },
                    navigation: usersNavigation,
                },
            },
            {
                resource: Budget,
                options: {
                    properties: {
                        id: { isVisible: { list: true, show: true, edit: false, filter: true } },
                        budget_name: { isVisible: { list: true, show: true, edit: false, filter: true } },
                        user_id: { isVisible: { list: true, show: true, edit: false, filter: true } },
                        currency: { isVisible: { list: true, show: true, edit: false, filter: true } },
                        frequency: { isVisible: { list: true, show: true, edit: false, filter: true } },
                        categories: { isVisible: { list: true, show: true, edit: false, filter: true } },
                        amount: { isVisible: { list: true, show: true, edit: false, filter: true } },
                        created_at: { isVisible: { list: true, show: true, edit: false, filter: true } },
                        updated_at: { isVisible: { list: true, show: true, edit: false, filter: true } },
                    },
                    navigation: usersNavigation,
                }
            },
            {
                resource: Coupon,
                options: {
                    navigation: null
                }
            },
            {
                resource: SubscriptionPlatform,
                options: {
                    name: "Subscription Platforms",
                    listProperties: [
                        "id",
                        "description",
                        "platform_name",
                        "website_url",
                        "created_by",
                        "logo",
                        "category_id",
                    ],
                    actions: {
                        new: {
                            component: SubscriptionPlatformFormComponent,
                        },
                    },
                    navigation: usersNavigation,
                },
            },
            {
                resource: Advertisement,
                options: { navigation: null }
            },
            {
                resource: Brand,
                options: { navigation: null }
            },
        ],
        // dashboard: {
        //   component: DashboardComponent,
        // },
        branding: {
            companyName: 'Your Company',
            logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkNLbL4BfAcv0YtT20pfmNw3agC06i6S57w&s',
        },
        componentLoader,
        rootPath: '/admin',
    });
    admin.watch();
    const SequelizeStore = ConnectSession(session.Store);
    const sessionStore = new SequelizeStore({
        db: postgresConnect,
        tableName: "session",
    });
    sessionStore.sync();
    const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
        authenticate,
        cookieName: "adminjs",
        cookiePassword: "sessionsecret",
    }, null, {
        store: sessionStore,
        resave: true,
        saveUninitialized: true,
        secret: "sessionsecret",
        cookie: {
            httpOnly: process.env.NODE_ENV === "production",
            secure: process.env.NODE_ENV === "production",
        },
        name: "adminjs",
    });
    app.use(admin.options.rootPath, adminRouter);
    app.listen(PORT, () => {
        console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
    });
};
start();
