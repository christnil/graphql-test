import Koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import helmet from 'koa-helmet';

import { makeExecutableSchema } from 'graphql-tools';

import schema from './schema';

const app = new Koa();
const router = new koaRouter();

app.use(helmet());
app.use(koaBody());

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.post('/graphql', graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }));

// Setup the /graphiql route to show the GraphiQL UI
router.get('/graphiql', graphiqlKoa({
    endpointURL: '/graphql' // a POST endpoint that GraphiQL will make the actual requests to
}));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(5000);
