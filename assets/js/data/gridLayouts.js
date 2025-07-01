export const gridLayouts = [
  {
    id: 'grid-2x2',
    name: 'Grid 2 x 2',
    img: 'assets/img/grid-2x2.png',
    html: `<table width="600" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td colspan="2" align="center" valign="top">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td colspan="2" align="center">
              <a
                href="%%=RedirectTo(concat('https://www.sodimac.cl/sodimac-cl/seleccion/maestro-de-la-casa?',@prefix))=%%"
                target="_blank"
              >
                <img
                  src="https://www.sodimac.cl/static/envioweb/2025/06-junio/13-grupo-b/images/13-grupo-B-1.png"
                  alt="Ir a Maestro de la casa"
                  style="display: block"
                  border="0"
                />
              </a>
            </td>
          </tr>
          <tr>
            <td colspan="2" align="center">
              <a
                href="%%=RedirectTo(concat('https://www.sodimac.cl/sodimac-cl/seleccion/guardian-del-jardin?',@prefix))=%%"
                target="_blank"
              >
                <img
                  src="https://www.sodimac.cl/static/envioweb/2025/06-junio/13-grupo-b/images/13-grupo-B-2.png"
                  alt="Ir a Guardian del jardin"
                  style="display: block"
                  border="0"
                />
              </a>
            </td>
          </tr>
        </table>
      </td>
      <!--FIN COLUMNA 1-->

      <!--START COLUMNA 3-->

      <td colspan="2" align="center" valign="top">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td colspan="2" align="center">
              <a
                href="%%=RedirectTo(concat('https://www.sodimac.cl/sodimac-cl/seleccion/parrillero-de-la-casa?',@prefix))=%%"
                target="_blank"
              >
                <img
                  src="https://www.sodimac.cl/static/envioweb/2025/06-junio/13-grupo-b/images/13-grupo-B-3.png"
                  alt="Ir a Parrillero de la casa"
                  style="display: block"
                  border="0"
                />
              </a>
            </td>
          </tr>

          <tr>
            <td colspan="2" align="center">
              <a
                href="%%=RedirectTo(concat('https://www.sodimac.cl/sodimac-cl/seleccion/el-mas-tecnologico?',@prefix))=%%"
                target="_blank"
              >
                <img
                  src="https://www.sodimac.cl/static/envioweb/2025/06-junio/13-grupo-b/images/13-grupo-B-4.png"
                  alt="Ir a El mas tecnologico"
                  style="display: block"
                  border="0"
                />
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>`
  },
  {
    id: 'grid-3x3',
    name: '3 × 3',
    img: 'assets/img/grid-3x3.png',
    html: `<div class="row row-cols-3">...tu contenido...</div>`
  },
  {
    id: 'grid-holy',
    name: 'Holy Grail',
    img: 'assets/img/grid-holy.png',
    html: `<div class="container"><header>...</header><div class="row">...</div><footer>...</footer></div>`
  },
  {
    id: 'grid-sidebar',
    name: 'Sidebar',
    img: 'assets/img/grid-sidebar.png',
    html: `<div class="d-flex"><aside>...</aside><main>...</main></div>`
  },
  {
    id: 'grid-header-main-footer',
    name: 'Header Main Footer',
    img: 'assets/img/grid-header-main-footer.png',
    html: `<header>...</header><main>...</main><footer>...</footer>`
  },
  {
    id: 'grid-infinite',
    name: 'Infinite Rows',
    img: 'assets/img/grid-infinite.png',
    html: `<div class="d-grid gap-2">...tu contenido...</div>`
  },
  {
    id: 'grid-infinite-areas',
    name: 'Infinite Rows with Areas',
    img: 'assets/img/grid-infinite-areas.png',
    html: `<div class="grid-areas">...áreas definidas...</div>`
  }
];

export const flexLayouts = [
  {
    id: 'flex-row',
    name: 'Row',
    img: 'assets/img/flex-row.png',
    html: `<div class="d-flex">...tu contenido...</div>`
  },
  {
    id: 'flex-row-wrap',
    name: 'Row Wrap',
    img: 'assets/img/flex-row-wrap.png',
    html: `<div class="d-flex flex-wrap">...tu contenido...</div>`
  },
  {
    id: 'flex-fill-space',
    name: 'Fill Space',
    img: 'assets/img/fill-space.png',
    html: `<div class="d-flex">...tu contenido...</div>`
  },
  {
    id: 'flex-fill-remaining',
    name: 'Fill Remaining Space',
    img: 'assets/img/fill-remaining.png',
    html: `<div class="d-flex"><div class="flex-grow-1">...</div><div>...</div></div>`
  },
  {
    id: 'flex-separate',
    name: 'Separate',
    img: 'assets/img/flex-separate.png',
    html: `<div class="d-flex justify-content-between">...tu contenido...</div>`
  }
];
