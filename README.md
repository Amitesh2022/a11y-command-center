# A11y Command Center

A11y Command Center helps teams make websites and apps easier for everyone to use, including people with disabilities.

[Watch the product demo](docs/demo.webm)

## Business problem and users

A11y Command Center helps teams make websites and apps easier for everyone to use, including people with disabilities. It is useful for product teams, designers, testers, and managers who want to improve accessibility.

## Key workflows

- See accessibility problems in one place.
- Find the most important problems first.
- Track which problems are being fixed.
- Check progress across different products.
- Keep clear proof of completed work.

## Vue highlights

The product uses Vue to organise separate pages, forms, lists, and smooth screen changes. Shared information stays in one place so every page shows the same result. Automated checks cover the most important actions.

## Architecture and state flow

The product is split into clear pages. Shared information is kept in one central place, while each page manages only the search box, filters, or form currently being used. A user action updates the shared information and every related page shows the new result.

## Accessibility and responsive behaviour

Buttons, forms, and links can be used with a keyboard. Labels explain what each field does, and important information is shown with words, not only colours. The layout also adjusts for tablets and phones.

## Run and verify

These commands install the project, check it, and start it on a computer:

```bash
npm ci
npm test
npm run build
npm run dev
```

## Structure

- `src/` — the product pages, actions, and design.
- `docs/demo.webm` — a short video showing the product.
- `package.json` — the commands and packages needed to run it.
- `README.md` — this simple product guide.

## Tradeoffs and roadmap

This project uses sample information and does not connect to a real company system. A future version could connect to real accessibility checks, add team sign-in, and create clearer progress reports.
