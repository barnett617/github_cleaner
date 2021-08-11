# github_cleaner
A quick tool for cleaning empty github repositories for you.

## Steps

### 1) [Create a github personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)

### 2) Create a local config named `.config.js` as below

```js
exports.config = {
  pat: 'xxx',
  owner: 'barnett617'
}
```

### 3) Run your node.js app

```js
node app.js
```

## Example

```
┌─────────┬───────────────────────────────┬──────────────────────────────────────────┬───────┬────────────────────────┬────────────────────────┐
│ (index) │             name              │                 fullName                 │ size  │       createDate       │       updateDate       │
├─────────┼───────────────────────────────┼──────────────────────────────────────────┼───────┼────────────────────────┼────────────────────────┤
│    0    │        'AlgoExercise'         │        'barnett617/AlgoExercise'         │ 1015  │ '2021-03-23T01:21:33Z' │ '2021-03-24T16:01:54Z' │
│    1    │         'barnett617'          │         'barnett617/barnett617'          │   1   │ '2020-08-27T04:56:46Z' │ '2020-08-27T06:25:33Z' │
│    2    │    'barnett617.github.io'     │    'barnett617/barnett617.github.io'     │ 1249  │ '2020-05-04T03:49:53Z' │ '2020-08-20T09:21:28Z' │
│    3    │            'blog'             │            'barnett617/blog'             │ 11926 │ '2019-01-17T13:11:09Z' │ '2020-04-26T02:50:58Z' │
│    4    │        'blog-comment'         │        'barnett617/blog-comment'         │   0   │ '2020-05-02T15:21:37Z' │ '2020-05-02T15:23:45Z' │
│    5    │        'browser-marks'        │        'barnett617/browser-marks'        │  33   │ '2021-01-04T11:18:30Z' │ '2021-03-11T15:12:08Z' │
│    6    │            'clock'            │            'barnett617/clock'            │  274  │ '2018-09-04T03:06:14Z' │ '2021-03-12T08:25:14Z' │
│    7    │          'cm-weapp'           │          'barnett617/cm-weapp'           │ 36020 │ '2018-12-20T03:52:12Z' │ '2019-01-11T12:35:04Z' │
│    8    │           'codehub'           │           'barnett617/codehub'           │  131  │ '2021-02-20T14:34:44Z' │ '2021-08-05T15:34:01Z' │
│    9    │    'composition-api-demo'     │    'barnett617/composition-api-demo'     │  59   │ '2020-10-09T12:40:25Z' │ '2020-10-09T12:43:45Z' │
│   10    │       'css-animations'        │       'barnett617/css-animations'        │  813  │ '2020-01-06T11:02:08Z' │ '2020-01-07T08:07:41Z' │
│   11    │         'danmu-deom'          │         'barnett617/danmu-deom'          │   6   │ '2021-04-07T02:15:29Z' │ '2021-04-07T02:23:09Z' │
│   12    │             'doc'             │             'barnett617/doc'             │  551  │ '2018-09-18T06:16:40Z' │ '2020-05-16T04:05:49Z' │
│   13    │          'front-end'          │          'barnett617/front-end'          │  28   │ '2020-04-20T01:57:14Z' │ '2020-07-31T08:49:24Z' │
│   14    │           'get_ten'           │           'barnett617/get_ten'           │  44   │ '2018-09-06T10:46:30Z' │ '2020-01-03T03:56:36Z' │
│   15    │       'github_cleaner'        │       'barnett617/github_cleaner'        │  10   │ '2021-08-11T15:21:14Z' │ '2021-08-11T15:23:38Z' │
│   16    │         'good-sites'          │         'barnett617/good-sites'          │   4   │ '2020-09-23T08:23:20Z' │ '2020-09-23T08:54:08Z' │
│   17    │          'hexo-blog'          │          'barnett617/hexo-blog'          │ 3020  │ '2020-05-04T06:21:34Z' │ '2020-08-20T09:28:53Z' │
│   18    │           'keynote'           │           'barnett617/keynote'           │ 1067  │ '2018-11-28T09:50:48Z' │ '2021-02-21T03:36:20Z' │
│   19    │          'leetcode'           │          'barnett617/leetcode'           │  161  │ '2020-07-19T04:03:46Z' │ '2021-07-05T14:37:00Z' │
│   20    │    'LeetcodeJavaSolutions'    │    'barnett617/LeetcodeJavaSolutions'    │  738  │ '2021-02-27T15:56:55Z' │ '2021-06-07T13:10:53Z' │
│   21    │           'lightea'           │           'barnett617/lightea'           │   0   │ '2020-11-16T03:01:10Z' │ '2020-11-16T03:15:07Z' │
│   22    │         'node_share'          │         'barnett617/node_share'          │  32   │ '2018-09-17T03:41:58Z' │ '2018-11-01T12:58:10Z' │
│   23    │       'python_analysis'       │       'barnett617/python_analysis'       │  295  │ '2019-05-07T11:48:42Z' │ '2021-06-04T10:01:11Z' │
│   24    │      'python_for_learn'       │      'barnett617/python_for_learn'       │  820  │ '2018-07-11T15:39:15Z' │ '2021-01-06T02:46:53Z' │
│   25    │          'smartshop'          │          'barnett617/smartshop'          │ 1217  │ '2018-12-27T12:52:46Z' │ '2021-03-01T12:45:24Z' │
│   26    │    'stereotyped-reference'    │    'barnett617/stereotyped-reference'    │   9   │ '2021-04-21T15:26:06Z' │ '2021-08-05T13:50:07Z' │
│   27    │      'unit-testing-vue'       │      'barnett617/unit-testing-vue'       │  108  │ '2020-10-23T02:37:47Z' │ '2020-11-16T09:16:38Z' │
│   28    │          'vue-basic'          │          'barnett617/vue-basic'          │  569  │ '2021-07-12T15:15:42Z' │ '2021-07-21T01:03:04Z' │
│   29    │      'vue-basic-points'       │      'barnett617/vue-basic-points'       │  837  │ '2021-07-11T12:34:14Z' │ '2021-07-24T13:40:40Z' │
│   30    │      'vue-mastery-class'      │      'barnett617/vue-mastery-class'      │  26   │ '2020-10-09T11:25:12Z' │ '2020-11-16T09:15:53Z' │
│   31    │ 'vue3-composition-api-sample' │ 'barnett617/vue3-composition-api-sample' │  92   │ '2020-10-10T07:12:10Z' │ '2020-10-21T07:55:28Z' │
│   32    │          'vue3-demo'          │          'barnett617/vue3-demo'          │ 5090  │ '2020-08-14T02:56:28Z' │ '2020-08-31T06:40:17Z' │
│   33    │           'WangXin'           │           'barnett617/WangXin'           │   7   │ '2018-09-11T12:11:49Z' │ '2021-03-01T11:57:38Z' │
│   34    │          'websites'           │          'barnett617/websites'           │   3   │ '2021-04-25T15:13:35Z' │ '2021-04-26T14:52:00Z' │
│   35    │     'weixin-pat-feature'      │     'barnett617/weixin-pat-feature'      │  13   │ '2021-07-29T09:00:09Z' │ '2021-07-29T09:00:23Z' │
│   36    │            'znsc'             │            'barnett617/znsc'             │ 21513 │ '2017-06-04T09:59:42Z' │ '2020-01-02T07:21:58Z' │
│   37    │         'basicserver'         │        'OrangeFunny/basicserver'         │   0   │ '2020-04-02T09:31:13Z' │ '2020-04-02T09:31:13Z' │
│   38    │             'rn'              │             'OrangeFunny/rn'             │   0   │ '2020-04-02T09:32:22Z' │ '2020-04-02T09:32:22Z' │
│   39    │            'ruru'             │            'OrangeFunny/ruru'            │  189  │ '2020-08-08T02:04:16Z' │ '2020-08-08T02:04:19Z' │
│   40    │           'server'            │           'OrangeFunny/server'           │ 4888  │ '2020-04-02T09:29:39Z' │ '2020-04-03T03:12:27Z' │
│   41    │        'webapp-react'         │        'OrangeFunny/webapp-react'        │   0   │ '2020-04-02T09:33:23Z' │ '2020-04-02T09:33:23Z' │
│   42    │          'smartshop'          │          'smartpigs/smartshop'           │  287  │ '2020-08-19T06:32:30Z' │ '2020-08-20T09:29:20Z' │
│   43    │        'little-pat-pc'        │   'wilson-code-snippet/little-pat-pc'    │  16   │ '2021-07-29T02:42:08Z' │ '2021-07-29T07:15:21Z' │
│   44    │     'weixin-pat-feature'      │    'wilson-family/weixin-pat-feature'    │  13   │ '2021-07-29T09:05:43Z' │ '2021-07-29T09:05:57Z' │
│   45    │     'weixin-pat-service'      │    'wilson-family/weixin-pat-service'    │   0   │ '2021-07-30T10:16:10Z' │ '2021-07-30T10:25:13Z' │
└─────────┴───────────────────────────────┴──────────────────────────────────────────┴───────┴────────────────────────┴────────────────────────┘
```

## Reference

- [Github API](https://docs.github.com/en/rest/reference/repos#list-repositories-for-the-authenticated-user)
- [Extendable client for GitHub's REST & GraphQL APIs](https://github.com/octokit/core.js#readme)