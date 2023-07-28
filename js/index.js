const app = new Vue({
    el: "#app",
    data: {
        title: '记事本',
        job: '',
        jobList: [
            { id: 1, name: '客从远方来' },
            { id: 2, name: '长驱直入' },
            { id: 3, name: '邪恶的扩张' },
        ],
        isShow: 0
    },
    methods: {
        addJob() {
            if(this.job === '') return
            this.jobList.unshift({
                id: +new Date(),
                name: this.job
            })
            this.job = ''
        },
        del(id) {
            this.jobList = this.jobList.filter(item => item.id != id)
        },
        clear() {
            this.jobList = []
        }
    }
})