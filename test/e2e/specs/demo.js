module.exports = {
  'Find the answer.': function(client) {
    // 定义 Bing 页面中的节点.
    const searchInput = '#kw';
    const searchBtn = '#su';
    const question = '测试nightwatch自动打开网站搜索-test';

    // 启动浏览器并打开 https://www.baidu.com
    client.url('https://www.baidu.com/').maximizeWindow();

    // 确保 "body" 和输入框可以使用.
    client.expect.element('body').to.be.present;
    client.expect.element(searchInput).to.be.visible;
    client.pause(2000); // 稍等两秒.

    // 输入 "测试nightwatch自动打开网站搜索" 然后搜索.
    client.setValue(searchInput, question);
    client.click(searchBtn);
    client.pause(2000);

    // 截一张图然后保存到 "reports/answer.png".
    client.expect.element('body').to.be.present;
    client.saveScreenshot('test/e2e/reports/answers.png');
    client.end();
  }
};
