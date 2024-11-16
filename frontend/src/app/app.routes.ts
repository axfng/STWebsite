import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScienceMythsComponent } from './science-myths/science-myths.component';
import { ScienceSparknotesComponent } from './science-sparknotes/science-sparknotes.component';
import { JournalComponent } from './journal/journal.component';
import { MissionComponent } from './mission/mission.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { HealthAndMedComponent } from './health-and-med/health-and-med.component';
import { ChemAndBiochemComponent } from './chem-and-biochem/chem-and-biochem.component';
import { MattAndAstroComponent } from './matt-and-astro/matt-and-astro.component';
import { SociAndPsychComponent } from './soci-and-psych/soci-and-psych.component';
import { EnvrAndEcoComponent } from './envr-and-eco/envr-and-eco.component';

export const routes: Routes = [
    // HomeComponent.Route,
    {
        path: '', component: HomeComponent, pathMatch: 'full', 
    },
    {
        path: 'science-myths', component: ScienceMythsComponent,
    },
    {
        path: 'science-sparknotes', component: ScienceSparknotesComponent,
    },
    {
        path: 'journal', component: JournalComponent,
    },
    {
        path: 'mission', component: MissionComponent,
    },
    {
        path: 'get-involved', component: GetInvolvedComponent,
    },
    {
        path: 'health-and-med', component: HealthAndMedComponent,
    },
    {
        path: 'chem-and-biochem', component: ChemAndBiochemComponent,
    },
    {
        path: 'matt-and-astro', component: MattAndAstroComponent,
    },
    {
        path: 'soci-and-psych', component: SociAndPsychComponent,
    },
    {
        path: 'envr-and-eco', component: EnvrAndEcoComponent,
    },
];
