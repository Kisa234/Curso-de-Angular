export interface IDDcBatmanSuperheroBatmanPublisherDCComicsAlterEgoBruceWayneFirstAppearanceDetectiveComics27CharactersBruceWayneIDDcSupermanSuperheroSupermanPublisherDCComicsAlterEgoKalElFirstAppearanceActionComics1CharactersKalElIDDcFlashSuperheroFlashPublisherDCComicsAlterEgoJayGarrickFirstAppearanceFlashComics1CharactersJayGarrickBarryAllenWallyWestBartAllenIDDcGreenSuperheroGreenLanternPublisherDCComicsAlterEgoAlanScottFirstAppearanceAllAmericanComics16CharactersAlanScottHALJordanGuyGardnerJohnStewartKyleRaynorJadeSinestroSimonBazIDDcArrowSuperheroGreenArrowPublisherDCComicsAlterEgoOliverQueenFirstAppearanceMoreFunComics73CharactersOliverQueenIDDcWonderSuperheroWonderWomanPublisherDCComicsAlterEgoPrincessDianaFirstAppearanceAllStarComics8CharactersPrincessDianaIDDcMartianSuperheroMartianManhunterPublisherDCComicsAlterEgoJOnnJOnzzFirstAppearanceDetectiveComics225CharactersMartianManhunterIDDcRobinSuperheroRobinNightwingPublisherDCComicsAlterEgoDickGraysonFirstAppearanceDetectiveComics38CharactersDickGraysonIDDcBlueSuperheroBlueBeetlePublisherDCComicsAlterEgoDanGarretFirstAppearanceMysteryMenComics1CharactersDanGarretTedKordJaimeReyesIDDcBlackSuperheroBlackCanaryPublisherDCComicsAlterEgoDinahDrakeFirstAppearanceFlashComics86CharactersDinahDrakeDinahLanceIDMarvelSpiderSuperheroSpiderManPublisherMarvelComicsAlterEgoPeterParkerFirstAppearanceAmazingFantasy15CharactersPeterParkerIDMarvelCaptainSuperheroCaptainAmericaPublisherMarvelComicsAlterEgoSteveRogersFirstAppearanceCaptainAmericaComics1CharactersSteveRogersIDMarvelIronSuperheroIronManPublisherMarvelComicsAlterEgoTonyStarkFirstAppearanceTalesOfSuspense39CharactersTonyStarkIDMarvelThorSuperheroThorPublisherMarvelComicsAlterEgoThorOdinsonFirstAppearanceJourneyIntoMyster83CharactersThorOdinsonIDMarvelHulkSuperheroHulkPublisherMarvelComicsAlterEgoBruceBannerFirstAppearanceTheIncredibleHulk1CharactersBruceBannerIDMarvelWolverineSuperheroWolverinePublisherMarvelComicsAlterEgoJamesHowlettFirstAppearanceTheIncredibleHulk180CharactersJamesHowlettIDMarvelDaredevilSuperheroDaredevilPublisherMarvelComicsAlterEgoMatthewMichaelMurdockFirstAppearanceDaredevil1CharactersMatthewMichaelMurdockIDMarvelHawkeyeSuperheroHawkeyePublisherMarvelComicsAlterEgoClintonFrancisBartonFirstAppearanceTalesOfSuspense57CharactersClintonFrancisBartonIDMarvelCyclopsSuperheroCyclopsPublisherMarvelComicsAlterEgoScottSummersFirstAppearanceXMen1CharactersScottSummersIDMarvelSilverSuperheroSilverSurferPublisherMarvelComicsAlterEgoNorrinRaddFirstAppearanceTheFantasticFour48CharactersNorrinRadd {
    id:               string;
    superhero:        string;
    publisher:        Publisher;
    alter_ego:        string;
    first_appearance: string;
    characters:       string;
}

export enum Publisher {
    DCComics = "DC Comics",
    MarvelComics = "Marvel Comics",
}
