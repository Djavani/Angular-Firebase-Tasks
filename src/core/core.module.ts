import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { EnablePersistenceToken } from 'angularfire2/firestore/enable-persistance-token';
import { ModuleWithProviders, Optional, SkipSelf, NgModule } from '@angular/core';

@NgModule({
    imports: [
      AngularFirestoreModule
    ]
})
export class CustomAngularFirestoreModule {

    constructor (
        @Optional() @SkipSelf() parentModule: CustomAngularFirestoreModule,
        private afs: AngularFirestore
    ) {
        // apenas para garantir que será usado somente no AppModule
        if (parentModule) {
            throw new Error('CustomAngularFirestoreModule is already loaded. Import it in the AppModule only');
        }

        // configuração do timestamp
        afs.app.firestore().settings({timestampsInSnapshots: true});

    }

    static enablePersistence(): ModuleWithProviders {
        return {
            ngModule: CustomAngularFirestoreModule,
            providers: [
                { provide: EnablePersistenceToken, useValue: true },
            ]
        }
    }

}
