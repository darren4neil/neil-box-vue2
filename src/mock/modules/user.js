module.exports = [{
    url: '/user/listAll',		// 导出接口
    type: 'get',
    response: data => {
        return {
            code: 200,
            msg: '操作成功!',
            data: data.list
        }
    }
}]