export default {
    methods: {
        $_sleep: function(time) {
            console.log(123);
            return new Promise(resolve => setTimeout(resolve, time));
        }
    }
};
