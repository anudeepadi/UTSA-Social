# UTSA Connect

A campus community interface prototype built with Next.js, TypeScript and Tailwind CSS. It explores a shared feed, campus organizations and student-facing navigation.

**Status:** historical product prototype from November 2024. The former `myutsa.co` deployment is unavailable; this repository is the source case study.

## Run locally

```bash
git clone https://github.com/anudeepadi/utsa-connect.git
cd utsa-connect
npm ci
npm run dev
```

Open `http://localhost:3000`. `npm run build` produces a Next.js build. Use a Node version compatible with the checked-in Next.js dependency and lockfile.

## What is included

The [app source](src/app) contains the page/component implementation. The project demonstrates campus-oriented interface composition and navigation. Authentication, external campus calendars, real-time messaging, analytics and academic-system integrations were roadmap items in the original project description; they are not advertised here as completed services.

## Case-study scope

The source records the implementation in this repository. There is no separate team responsibility breakdown or deployed-user evaluation included, so this README does not attribute unrecorded contributions or claim adoption, performance improvements or a maintained campus service. A future case study should include a current local recording and identify any connected services explicitly.

## License

See [LICENSE](LICENSE) for the existing terms.
