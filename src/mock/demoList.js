// let demoList = [{
//     id: 1,
//     name: 'zs',
//     age: '23',
//     job: '前端工程师'
// }, {
//     id: 2,
//     name: 'ww',
//     age: '24',
//     job: '后端工程师'
// }];

// export default {
//     'get|/api/query': option => {
//         return {
//             status: 200,
//             message: 'success',
//             data: demoList
//         };
//     }
// }

let demoList = {
    status: 200,
    message: 'success',
    data: {
        total: 100,
        'rows|30': [{
            id: '@guid',
            name: '@cname',
            'age|20-30': 23,
            'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师', 'AI工程师']
        }]
    }
};
export default {
    'get|/api/query': demoList
}