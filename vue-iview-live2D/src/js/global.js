import store from '../vuex/index'
import router from '../router'

const apiUrl = 'www.baidu.com'

function loding(url,delay) {
    delay?delay:delay=1000
    new Promise(function (resolve, reject) {
        setTimeout(() => {
            store.state.dataStatus.isLoding = false
            resolve('火箭')
        }, delay)
    }).then(function () {
        router.push(url)
    })
}
export default
    {
        apiUrl,
        loding
    }