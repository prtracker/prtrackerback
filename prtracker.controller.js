module.exports =  function getList(req, res) {
  res.json({
    id: 123,
    prLink: 'https://github.com/rhinogram/rhinofront/pull/3123',
    raisedBy: 'roshni',
    jiraId: 2564,
    component: 'rhinofront',
    prOpenDate: '04/25/2019',
    prCloseDate: '04/26/2019',
    trt: 1,
  });
}