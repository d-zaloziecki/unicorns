class EventsHandler {
    constructor(repo, render) {
        this.repo = repo,
            this.renderer = render,
            this.$unicorns = $('#unicornsList')
    }

    getAllUnicornsFromDB() {
        this.repo.getAllUnicorns().then(() => {
            this.renderer.render(this.repo.unicorns)
        })
    }

    handleAddUnicorn() {
        $('.add-unicorn').on('click', () => {
            let $name = $('#nameInput')
            let $magic = $('#magicInput')

            this.repo.addANewUnicorn({ name: $name.val(), magic: $magic.val() }).then(() => {
                this.renderer.render(this.repo.unicorns)
                $magic.val("")
                $name.val("")
            })
        })
    }

    handleRemoveUnicorn() {
        this.$unicorns.on('click', '.remove-unicorn', (event)=>{
            let id = $(event.currentTarget).closest('.unicorn').data().id;

            this.repo.removeAUnicorn(id).then(() => {
                this.renderer.render(this.repo.unicorns)
            })
        })
    }
}

export default EventsHandler