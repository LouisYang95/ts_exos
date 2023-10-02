class Livre {
    titre: string
    auteur: string
    ISBN: string
    nombreDePages: number
    estEmprunte: boolean

    constructor(titre: string, auteur: string, ISBN: string, nombreDePages: number, estEmprunte: boolean) {
        this.titre = titre
        this.auteur = auteur
        this.ISBN = ISBN
        this.nombreDePages = nombreDePages
        this.estEmprunte = estEmprunte
    }

    emprunter(): boolean{
        return this.estEmprunte = true
    }

    retourner(): boolean{
        return this.estEmprunte = false
    }
}

class Bibliotheque {
    livres: Livre[]

    constructor(livres: Livre[]){
        this.livres = livres
    }


    ajouterLivre(livre: Livre){
        this.livres.push(livre)
    }

    rechercherLivres(criteria: { titre?: string, auteur?: string, empruntes?: boolean }): Livre[] {
        return this.livres.filter(livre => {
            if (criteria.titre && !livre.titre.toLowerCase().includes(criteria.titre.toLowerCase())) {
                return false;
            }
            if (criteria.auteur && !livre.auteur.toLowerCase().includes(criteria.auteur.toLowerCase())) {
                return false;
            }
            return !(typeof criteria.empruntes !== "undefined" && livre.estEmprunte !== criteria.empruntes);

        });
    }

    emprunterLivre(ISBN: string){
        let livreTab = this.livres.filter(l => l.ISBN === ISBN)
        livreTab.forEach((l)=>{
            if(l.ISBN === ISBN){
                l.emprunter()
            }
        })
    }

    retournerLivre(ISBN: string){
        let livreTab = this.livres.filter(l => l.ISBN === ISBN)
        livreTab.forEach((l)=>{
            if(l.ISBN === ISBN){
                l.retourner()
            }
        })
    }
}

const biblio = new Bibliotheque( [] )
const livre1 : Livre = new Livre('o', 'b', 'awe', 2, false)

const addNewBook = ( livre: Livre ) =>{
    biblio.ajouterLivre(livre)
    console.log('ajouter', biblio)
}

const searchForBook = (titre? : string, auteur?: string, empruntes?: boolean) =>{
    const livre = biblio.rechercherLivres({titre: titre, auteur: auteur, empruntes:empruntes})
    console.log('title', livre)
}

const emprunterNewBook = ( ISBN: string) =>{
    biblio.emprunterLivre(ISBN)
    console.log('emprunter', biblio)
}

const removeNewBook = (ISBN: string) =>{
    biblio.retournerLivre(ISBN)
    console.log('retourner', biblio)
}

addNewBook(livre1)
searchForBook('', 'b')
emprunterNewBook('awe')
removeNewBook('awe')