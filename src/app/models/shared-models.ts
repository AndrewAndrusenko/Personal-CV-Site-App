interface IDemoUrl {
  url:string,
  label:string
}
interface IRepository {
    repository_private:boolean,
    repository_text?:string
    repository_url?:string,
}
export interface IProjects {
    id:number,
    title:string,
    demo_urls:IDemoUrl[],
    repositories:IRepository[]
    icon:string,
    bullets:string[]
    slides:string[]
}