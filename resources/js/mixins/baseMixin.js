export default {
    methods: {
        //オブジェクトのディープコピー用関数
        $_deepCopy: function(obj) {
            return JSON.parse(JSON.stringify(obj));
        },
        //関数内でのwait処理用
        $_sleep: function(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        }
    }
};
