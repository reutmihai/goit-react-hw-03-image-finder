(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__1C-z-"}},14:function(e,a,t){e.exports={App:"App_App__2s_Fq"}},17:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},21:function(e,a,t){e.exports={loader:"Loader_loader__1j2Bs"}},23:function(e,a,t){e.exports=t(36)},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var r=t(2),n=t.n(r),l=t(16),s=t.n(l),o=t(8),c=t.n(o);class m extends r.Component{constructor(){super(...arguments),this.state={searchQuery:""},this.handleSubmit=(e=>{e.preventDefault();const{searchQuery:a}=this.state;""!==a.trim()?(this.props.onSubmit(a),this.setState({searchQuery:""})):alert("Please enter a search termin.")}),this.handleChange=(e=>{const{value:a}=e.target;this.setState({searchQuery:a})})}render(){return n.a.createElement("div",null,n.a.createElement("header",{className:c.a.Searchbar},n.a.createElement("form",{className:c.a.SearchForm,onSubmit:this.handleSubmit},n.a.createElement("button",{type:"submit",className:c.a["SearchForm-button"]},n.a.createElement("span",{className:c.a["SearchForm-button-label"]},"Search")),n.a.createElement("input",{className:c.a["SearchForm-input"],type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleChange}))))}}var i=t(13),h=t.n(i);var u=e=>{let{webformatURL:a,largeImageURL:t}=e;return n.a.createElement("li",{className:h.a.ImageGalleryItem},n.a.createElement("img",{src:a,alt:"",className:h.a["ImageGalleryItem-image"],onClick:()=>console.log(t)}))},g=t(17),p=t.n(g);var d=e=>{let{images:a}=e;return n.a.createElement("ul",{className:p.a.ImageGallery},a.map(e=>{let{id:a,webformatURL:t,largeImageURL:r}=e;return n.a.createElement(u,{key:a,webformatURL:t,largeImageURL:r})}))},b=t(38);const S="45884616-48de2ef17b1bd78226af0a3e8";b.a.defaults.baseURL="https://pixabay.com/api/";var _=t(18),y=t(21),I=t.n(y);const f=()=>n.a.createElement("div",{className:I.a.loader},n.a.createElement(_.a,{visible:!0,width:"200",color:"#4fa94d",ariaLabel:"infinity-spin-loading"}));var E=t(14),v=t.n(E);var L=class extends r.Component{constructor(){super(...arguments),this.state={searchQuery:"",isLoading:!1,images:[],error:""},this.handleSearchSubmit=(async e=>{try{this.setState({searchQuery:e,isLoading:!0,error:""});const t=await async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12;try{return(await b.a.get("",{params:{q:e,page:a,key:S,image_type:"photo",orientation:"horizontal",per_page:t}})).data.hits.map(e=>{let{id:a,webformatURL:t,largeImageURL:r}=e;return{id:a,webformatURL:t,largeImageURL:r}})}catch(r){throw console.log(r),r}}(e);this.setState({images:t})}catch(a){a.code&&this.setState({error:"N-a fost gasit niciun rezultat."})}finally{this.setState({isLoading:!1})}})}render(){const{images:e,error:a,isLoading:t}=this.state;return n.a.createElement("div",{className:v.a.App},a&&n.a.createElement("div",{className:v.a.error},a),n.a.createElement(m,{onSubmit:this.handleSearchSubmit}),n.a.createElement("div",null,t?n.a.createElement(f,null):n.a.createElement(d,{images:e})))}};t(35);s.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(L,null)))},8:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l","SearchForm-button":"Searchbar_SearchForm-button__3u-rY","SearchForm-button-label":"Searchbar_SearchForm-button-label__2bzU3","SearchForm-input":"Searchbar_SearchForm-input__j6qzO"}}},[[23,1,2]]]);
//# sourceMappingURL=main.d98982ab.chunk.js.map