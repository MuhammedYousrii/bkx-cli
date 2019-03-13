const names = require('../helpers/namesFormatter.helper');


function moduleF() {
    const { lowerName, capName} = names(name, singleName);
    return `import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    
    import { ${capName}RoutingModule } from './${lowerName}-routing.module';
    import { ${capName}IndexComponent } from './${lowerName}-index/${lowerName}-index.component';
    import { MatIconModule, MatTableModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatDialogModule, MatTooltipModule } from '@angular/material';
    import { ReactiveFormsModule } from '@angular/forms';
    import { ${capName}Service } from './model/${lowerName}.service';
    import { ComponentsModule } from '@shared/components/components.module';
    import { ModalModule } from 'ngx-bootstrap/modal';
    import { NgxsModule } from '@ngxs/store';
    import { ${capName}State } from './store/${lowerName}.state';
    import { NgxEditorModule } from 'ngx-editor';
    import { SharedDialogComponent } from '@shared/components/shared-dialog/shared-dialog.component';
    
    @NgModule({
      declarations: [${capName}IndexComponent, SharedDialogComponent],
      entryComponents: [SharedDialogComponent],
      imports: [
        CommonModule,
        ${capName}RoutingModule,
        MatTableModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        ComponentsModule,
        ModalModule,
        MatSnackBarModule,
        NgxEditorModule,
        MatTooltipModule,
        NgxsModule.forFeature([${capName}State]),
        MatDialogModule,
      ],
      providers: [${capName}Service]
    })
    export class ${capName}Module { }
    `
}


function routeModuleF (name, single) {
    const {lowerName, capName} = names(name, single);

    
    return `import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { ${capName}IndexComponent } from './${lowerName}-index/${lowerName}-index.component';
    
    const routes: Routes = [{
      path: '',
      component: ${capName}IndexComponent
    }];
    
    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class ${capName}RoutingModule { }
    `
}


module.exports = {
    moduleF,
    routeModuleF
}