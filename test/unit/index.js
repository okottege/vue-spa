const testContext = require.context('./specs', true, /\.spec$/);
testContext.keys().forEach(testContext);
