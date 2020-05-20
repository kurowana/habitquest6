export default {
    methods: {
        //オブジェクトのディープコピー用関数
        $_deepCopy: function(obj) {
            return JSON.parse(JSON.stringify(obj));
        },
        //関数内でのwait処理用
        $_sleep: function(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        },

        //axiosの通信エラー時の共通処理
        $_apiDefaultError: function(error) {
            console.log(error);
            const result = confirm(
                "通信エラーです。ページの再読み込みをして下さい。"
            );
            if (result) {
                location.reload();
            } else {
                return false;
            }
        }
    }
};
