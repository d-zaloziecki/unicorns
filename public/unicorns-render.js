class UnicornsRender {
    constructor(){
        this.$unicorns = $('#unicornsList')
        this.source = $('#unicorns-template').html()
    }

    render(unicorns){
        this.$unicorns.empty();
        let template = Handlebars.compile(this.source);
       
        let newHTML = template({unicorns});
        this.$unicorns.append(newHTML);    
    }
}

export default UnicornsRender