"use strict";(self["webpackChunkinstayul"]=self["webpackChunkinstayul"]||[]).push([[896],{6896:function(t,s,o){o.r(s),o.d(s,{default:function(){return T}});var e=function(){var t=this,s=t._self._c;return s("section",{staticClass:"home-page"},[t.isLoading?t._e():s("post-list",{attrs:{posts:t.postsToShow}}),t.isLoading?s("img",{staticClass:"main-loader",attrs:{src:o(3512)}}):t._e()],1)},n=[],i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"post-list"},t._l(t.posts,(function(t){return s("post-details",{key:t._id,attrs:{post:t}})})),1)},r=[],a=function(){var t=this,s=t._self._c;return t.user?s("div",{staticClass:"post-details"},[s("post-header",{attrs:{post:t.post,user:t.user}}),s("img",{staticClass:"post-details-img",attrs:{src:t.post.imgUrl,alt:`Photo by ${t.post.by.userName}`,loading:"lazy"}}),s("div",{staticClass:"post-details-content"},[s("post-actions",{attrs:{post:t.post,user:t.user}}),s("post-likes",{attrs:{post:t.post}}),s("post-author",{attrs:{post:t.post}}),t.slicedCommentsLength>0?s("button",{staticClass:"show-comments-btn",on:{click:function(s){t.isShowAllComments=!t.isShowAllComments}}},[t._v(" View "+t._s(t.showMoreLess)+" "+t._s(t.slicedCommentsLength)+" comments ")]):t._e(),s("post-comments",{attrs:{comments:t.commentsToShow,post:t.post,user:t.user}})],1),s("add-comment",{attrs:{post:t.post,parentRefs:t.$refs,user:t.user}})],1):t._e()},l=[],m=o(4725),p=o(5116),c=o(2133),d=o(6879),u=o(4829),h=o(3707),g=o(8093),C={name:"post-details",props:["post"],data(){return{isShownModal:!1,isShowAllComments:!1,user:null,commentToAdd:{content:"",createdAt:Date.now()}}},computed:{getCommentCreatedAt(){return moment(this.post.comments.createdAt).fromNow()},commentsToShow(){return this.post.comments.length>2&&!this.isShowAllComments?this.post.comments.slice(this.post.comments.length-2,this.post.comments.length):this.post.comments},slicedCommentsLength(){return this.post.comments.length-2},showMoreLess(){return this.isShowAllComments?"less":"all"},isByLoggedUser(){return t=>t===this.user._id}},methods:{closeModal(){this.isShownModal=null},addComment(){const t=JSON.parse(JSON.stringify(this.commentToAdd));this.$store.dispatch({type:"addComment",comment:t,postId:this.post._id,user:this.user}),this.commentToAdd={content:""}}},async created(){const t=await m.Z.getById("5fc5fd32768787be41a9a627");this.user=t},components:{postHeader:p.Z,postComments:c.Z,postLikes:d.Z,addComment:u.Z,postActions:h.Z,postAuthor:g.Z}},w=C,f=o(1001),_=(0,f.Z)(w,a,l,!1,null,null,null),y=_.exports,A={name:"post-list",props:["posts"],components:{postDetails:y}},S=A,L=(0,f.Z)(S,i,r,!1,null,null,null),Z=L.exports,k={name:"instayul-app",computed:{isLoading(){return this.$store.getters.isLoading},postsToShow(){return this.$store.getters.getPosts}},methods:{loadPosts(){this.$store.dispatch({type:"loadPosts"})}},created(){this.loadPosts()},components:{postList:Z}},v=k,b=(0,f.Z)(v,e,n,!1,null,null,null),T=b.exports}}]);
//# sourceMappingURL=896.dfb3d238.js.map