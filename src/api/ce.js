import * as API from './'

export default{
	test1: params => {
		return API.GET('/test1', params);
	}
}