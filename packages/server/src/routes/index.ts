import Router from "koa-router";

const router = new Router();

// create user and login
router.get("/api/login", (ctx) =>{
    ctx.body = { msg: 'api ogin' };
});

export default router.routes();