import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ButtonComponent } from './component/button/button.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LogoComponent } from './component/logo/logo.component';
import { SeachComponent } from './component/seach/seach.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { IndexComponent } from './page/index/index.component';
import { TagComponent } from './component/tag/tag.component';
import { BannerComponent } from './component/banner/banner.component';
import { BookmarkComponent } from './component/bookmark/bookmark.component';
import { ListCardComponent } from './component/list-card/list-card.component';
import { RankingComponent } from './component/ranking/ranking.component';
import { SmCardComponent } from './component/sm-card/sm-card.component';
import { RecommentComponent } from './component/recomment/recomment.component';
import { TimelineComponent } from './component/timeline/timeline.component';
import { NewComponent } from './component/new/new.component';
import { BannerHeaderComponent } from './component/banner-header/banner-header.component';
import { UpdatedContentComponent } from './component/updated-content/updated-content.component';
import { RuleComponent } from './page/rule/rule.component';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { TitleComponent } from './component/title/title.component';
import { AddNovelComponent } from './page/add-novel/add-novel.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { EditorComponent } from './component/editor/editor.component';
import { PopularComponent } from './page/popular/popular.component';
import { SelectCatagoryComponent } from './component/select-catagory/select-catagory.component';
import { ViewListComponent } from './component/view-list/view-list.component';
import { BtnViewAllComponent } from './component/btn-view-all/btn-view-all.component';
import { DetailBookComponent } from './page/detail-book/detail-book.component';
import { BookDetailComponent } from './component/book-detail/book-detail.component';
import { TagItemComponent } from './component/tag-item/tag-item.component';
import { ButtonIconComponent } from './component/button-icon/button-icon.component';
import { ReviewComponent } from './component/review/review.component';
import { ChapterComponent } from './component/chapter/chapter.component';
import { RelatedComponent } from './component/related/related.component';
import { ReadBookComponent } from './page/read-book/read-book.component';
import { ParagraphComponent } from './component/paragraph/paragraph.component';
import { ChosenDirective } from './chosen.directive';
import { CommentComponent } from './component/comment/comment.component';
import { MakeNovelComponent } from './page/make-novel/make-novel.component';
import { LoginComponent } from './page/login/login.component';
import { ProfileComponent } from './page/profile/profile.component';
import { AlertComponent } from './component/alert/alert.component';


const appRoutes: Routes = [
  { path: '',     
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', component: IndexComponent },
  { path: 'rank', component: LogoComponent},
  { path: 'rule', component: RuleComponent},
  { path: 'add-novel', component: AddNovelComponent},
  { path: 'popular', component: PopularComponent},
  { path: 'detail-book', component: DetailBookComponent},
  { path: 'read-book', component: ReadBookComponent},
  { path: 'make-novel', component: MakeNovelComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ButtonComponent,
    NavbarComponent,
    LogoComponent,
    SeachComponent,
    NavigationComponent,
    IndexComponent,
    TagComponent,
    BannerComponent,
    BookmarkComponent,
    ListCardComponent,
    RankingComponent,
    SmCardComponent,
    RecommentComponent,
    TimelineComponent,
    NewComponent,
    BannerHeaderComponent,
    UpdatedContentComponent,
    RuleComponent,
    CheckboxComponent,
    TitleComponent,
    AddNovelComponent,
    EditorComponent,
    PopularComponent,
    SelectCatagoryComponent,
    ViewListComponent,
    BtnViewAllComponent,
    DetailBookComponent,
    BookDetailComponent,
    TagItemComponent,
    ButtonIconComponent,
    ReviewComponent,
    ChapterComponent,
    RelatedComponent,
    ReadBookComponent,
    ParagraphComponent,
    ChosenDirective,
    CommentComponent,
    MakeNovelComponent,
    LoginComponent,
    ProfileComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  card: number = 10
}
