export default {
    methods: {
        $_sleep: function(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        }
    }
};
