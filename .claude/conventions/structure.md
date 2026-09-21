# Projectstructuur

```
src/
├── Components/    # gedeelde, herbruikbare UI-componenten
├── Modules/       # feature-modules
├── Hooks/         # globale custom hooks
├── Logic/         # business logic / services
├── Helpers/       # pure utilities
├── Definitions/   # gedeelde types
├── Config/        # app-configuratie
├── Resources/     # statische assets
├── App.tsx
├── colors.ts      # kleurconstanten
└── main.tsx
```

Directories worden pas aangemaakt als er iets in hoort.

## Module-indeling

```
Modules/FeatureName/
├── Scenes/          # full-page views (één per route)
│   └── SceneName/
│       ├── SceneName.tsx
│       ├── Components/   # scene-specifiek
│       ├── Hooks/
│       └── Scenes/       # geneste sub-scenes
├── Components/      # module-breed gedeeld
├── Hooks/
├── Definitions/
└── Logic/
```

Regel: iets leeft zo dicht mogelijk bij waar het gebruikt wordt; pas omhoog verplaatsen zodra een tweede plek het nodig heeft.

## Naming

| Artefact | Conventie | Voorbeeld |
|---|---|---|
| React component | PascalCase `.tsx` | `ProjectCard.tsx` |
| Hook / utility | camelCase `.ts` | `useDocumentTitle.ts` |
| Type-definitie | PascalCase `.ts` | `Project.ts` |
| Directory | PascalCase | `Components/ProjectCard/`, `Modules/Portfolio/` |
