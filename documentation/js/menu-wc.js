'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">post-tech-diner documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientesModule.html" data-type="entity-link" >ClientesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ClientesModule-9e5aa5d1e72c84e2f07a460d41d4bca6deab149da4147b76ce76283eadf90a2c9d63bca1ee79107ec65a0bbebfe497e57631b4d9f1dad2ab98b88b08a0ac234c"' : 'data-bs-target="#xs-controllers-links-module-ClientesModule-9e5aa5d1e72c84e2f07a460d41d4bca6deab149da4147b76ce76283eadf90a2c9d63bca1ee79107ec65a0bbebfe497e57631b4d9f1dad2ab98b88b08a0ac234c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientesModule-9e5aa5d1e72c84e2f07a460d41d4bca6deab149da4147b76ce76283eadf90a2c9d63bca1ee79107ec65a0bbebfe497e57631b4d9f1dad2ab98b88b08a0ac234c"' :
                                            'id="xs-controllers-links-module-ClientesModule-9e5aa5d1e72c84e2f07a460d41d4bca6deab149da4147b76ce76283eadf90a2c9d63bca1ee79107ec65a0bbebfe497e57631b4d9f1dad2ab98b88b08a0ac234c"' }>
                                            <li class="link">
                                                <a href="controllers/ClientesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ClientesModule-9e5aa5d1e72c84e2f07a460d41d4bca6deab149da4147b76ce76283eadf90a2c9d63bca1ee79107ec65a0bbebfe497e57631b4d9f1dad2ab98b88b08a0ac234c"' : 'data-bs-target="#xs-injectables-links-module-ClientesModule-9e5aa5d1e72c84e2f07a460d41d4bca6deab149da4147b76ce76283eadf90a2c9d63bca1ee79107ec65a0bbebfe497e57631b4d9f1dad2ab98b88b08a0ac234c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientesModule-9e5aa5d1e72c84e2f07a460d41d4bca6deab149da4147b76ce76283eadf90a2c9d63bca1ee79107ec65a0bbebfe497e57631b4d9f1dad2ab98b88b08a0ac234c"' :
                                        'id="xs-injectables-links-module-ClientesModule-9e5aa5d1e72c84e2f07a460d41d4bca6deab149da4147b76ce76283eadf90a2c9d63bca1ee79107ec65a0bbebfe497e57631b4d9f1dad2ab98b88b08a0ac234c"' }>
                                        <li class="link">
                                            <a href="injectables/ClientesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PedidosModule.html" data-type="entity-link" >PedidosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PedidosModule-7fabe5b4b5c2fbf5175d1de45170585862c18f7ab1dc08c186e3b84238728a862be9c8d60d6dbbb936b0c1fb4c2665cbe7dddbfb0ba3e91133dccf1bc6d4fb3e"' : 'data-bs-target="#xs-controllers-links-module-PedidosModule-7fabe5b4b5c2fbf5175d1de45170585862c18f7ab1dc08c186e3b84238728a862be9c8d60d6dbbb936b0c1fb4c2665cbe7dddbfb0ba3e91133dccf1bc6d4fb3e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PedidosModule-7fabe5b4b5c2fbf5175d1de45170585862c18f7ab1dc08c186e3b84238728a862be9c8d60d6dbbb936b0c1fb4c2665cbe7dddbfb0ba3e91133dccf1bc6d4fb3e"' :
                                            'id="xs-controllers-links-module-PedidosModule-7fabe5b4b5c2fbf5175d1de45170585862c18f7ab1dc08c186e3b84238728a862be9c8d60d6dbbb936b0c1fb4c2665cbe7dddbfb0ba3e91133dccf1bc6d4fb3e"' }>
                                            <li class="link">
                                                <a href="controllers/PedidosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PedidosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PedidosModule-7fabe5b4b5c2fbf5175d1de45170585862c18f7ab1dc08c186e3b84238728a862be9c8d60d6dbbb936b0c1fb4c2665cbe7dddbfb0ba3e91133dccf1bc6d4fb3e"' : 'data-bs-target="#xs-injectables-links-module-PedidosModule-7fabe5b4b5c2fbf5175d1de45170585862c18f7ab1dc08c186e3b84238728a862be9c8d60d6dbbb936b0c1fb4c2665cbe7dddbfb0ba3e91133dccf1bc6d4fb3e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PedidosModule-7fabe5b4b5c2fbf5175d1de45170585862c18f7ab1dc08c186e3b84238728a862be9c8d60d6dbbb936b0c1fb4c2665cbe7dddbfb0ba3e91133dccf1bc6d4fb3e"' :
                                        'id="xs-injectables-links-module-PedidosModule-7fabe5b4b5c2fbf5175d1de45170585862c18f7ab1dc08c186e3b84238728a862be9c8d60d6dbbb936b0c1fb4c2665cbe7dddbfb0ba3e91133dccf1bc6d4fb3e"' }>
                                        <li class="link">
                                            <a href="injectables/PedidosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PedidosService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProdutosModule.html" data-type="entity-link" >ProdutosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProdutosModule-c99907172e36ac3d99a8a39ab2041cd4811360f3f22c1a9875a2902cf749afe864d7050e20bf9b95c6f3b3e2084dd9077925a0821ec8dd593f4fb6c862fd292b"' : 'data-bs-target="#xs-controllers-links-module-ProdutosModule-c99907172e36ac3d99a8a39ab2041cd4811360f3f22c1a9875a2902cf749afe864d7050e20bf9b95c6f3b3e2084dd9077925a0821ec8dd593f4fb6c862fd292b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProdutosModule-c99907172e36ac3d99a8a39ab2041cd4811360f3f22c1a9875a2902cf749afe864d7050e20bf9b95c6f3b3e2084dd9077925a0821ec8dd593f4fb6c862fd292b"' :
                                            'id="xs-controllers-links-module-ProdutosModule-c99907172e36ac3d99a8a39ab2041cd4811360f3f22c1a9875a2902cf749afe864d7050e20bf9b95c6f3b3e2084dd9077925a0821ec8dd593f4fb6c862fd292b"' }>
                                            <li class="link">
                                                <a href="controllers/ProdutosController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProdutosController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProdutosModule-c99907172e36ac3d99a8a39ab2041cd4811360f3f22c1a9875a2902cf749afe864d7050e20bf9b95c6f3b3e2084dd9077925a0821ec8dd593f4fb6c862fd292b"' : 'data-bs-target="#xs-injectables-links-module-ProdutosModule-c99907172e36ac3d99a8a39ab2041cd4811360f3f22c1a9875a2902cf749afe864d7050e20bf9b95c6f3b3e2084dd9077925a0821ec8dd593f4fb6c862fd292b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProdutosModule-c99907172e36ac3d99a8a39ab2041cd4811360f3f22c1a9875a2902cf749afe864d7050e20bf9b95c6f3b3e2084dd9077925a0821ec8dd593f4fb6c862fd292b"' :
                                        'id="xs-injectables-links-module-ProdutosModule-c99907172e36ac3d99a8a39ab2041cd4811360f3f22c1a9875a2902cf749afe864d7050e20bf9b95c6f3b3e2084dd9077925a0821ec8dd593f4fb6c862fd292b"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProdutosService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProdutosService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/ProdutosController.html" data-type="entity-link" >ProdutosController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AtualizarDto.html" data-type="entity-link" >AtualizarDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CadastroDto.html" data-type="entity-link" >CadastroDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CadastroDto-1.html" data-type="entity-link" >CadastroDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cliente.html" data-type="entity-link" >Cliente</a>
                            </li>
                            <li class="link">
                                <a href="classes/CriarPedidoDto.html" data-type="entity-link" >CriarPedidoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pedido.html" data-type="entity-link" >Pedido</a>
                            </li>
                            <li class="link">
                                <a href="classes/PedidosItems.html" data-type="entity-link" >PedidosItems</a>
                            </li>
                            <li class="link">
                                <a href="classes/Produto.html" data-type="entity-link" >Produto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClientePostgresRepository.html" data-type="entity-link" >ClientePostgresRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PeditosPostgres.html" data-type="entity-link" >PeditosPostgres</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProdutoPostresRepository.html" data-type="entity-link" >ProdutoPostresRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProdutosService.html" data-type="entity-link" >ProdutosService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IClientesService.html" data-type="entity-link" >IClientesService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPedidosService.html" data-type="entity-link" >IPedidosService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});