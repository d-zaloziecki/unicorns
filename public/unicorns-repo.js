class UnicornsRepo {
    constructor(){
        this.unicorns = []
    }

    getAllUnicorns(){
        return $.get('unicorns').then((data)=>{
            this.unicorns = data
        })
    }

    addANewUnicorn(newUnicorn){
        return $.post('unicorns', newUnicorn).then((data)=>{
            this.unicorns = data
        })
    }

    removeAUnicorn(id){
        return $.ajax({
            url: 'unicorns/' + id,
            method: 'DELETE',
            contentType: 'application/json',
            success: (data)=> {
                this.unicorns = data;
            },
            error: (request,msg,error)=> {
                console.log(error)
            }
        });       
    }
}

export default UnicornsRepo