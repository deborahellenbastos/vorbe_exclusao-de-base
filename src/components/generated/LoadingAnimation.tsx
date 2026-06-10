import React, { useState } from 'react';
interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
interface LoadingAnimationProps extends BaseComponentProps {
  onCancel?: () => void;
  fileName?: string;
}
export const LoadingAnimation = (props: LoadingAnimationProps) => {
  const [activeTab, setActiveTab] = useState('base-cadastral');
  const [isHoveredStop, setIsHoveredStop] = useState(false);
  const tabs = [{
    id: 'base-cadastral',
    label: 'Base cadastral',
    locked: false
  }, {
    id: 'motor-calculo',
    label: 'Motor de cálculo',
    locked: false
  }, {
    id: 'simulador',
    label: 'Simulador',
    locked: true
  }];
  return <div className={`loading-animation ${props.className || ''}`.trim()} style={{
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(252, 252, 253, 1)',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    position: 'relative',
    fontFamily: '"Inter", sans-serif',
    ...props.style
  }}>
      <header className="navbar" style={{
      width: '100%',
      height: '64px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 24px',
      backgroundColor: 'rgba(4, 97, 88, 1)',
      boxSizing: 'border-box',
      flexShrink: 0
    }}>
        <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center'
      }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/b038f422-8cdf-4e9c-b72f-d9f21a6d1b98.svg" alt="Vorbe Logo" style={{
          height: '32px',
          width: 'auto',
          cursor: 'pointer'
        }} />
        </div>

        <nav className="segmented-control" style={{
        width: '100%',
        maxWidth: '640px',
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '4px',
        gap: '4px',
        backgroundColor: 'rgba(242, 242, 245, 0.1)',
        boxSizing: 'border-box',
        borderRadius: '8px',
        margin: '0 20px'
      }}>
          {tabs.map(tab => <button key={tab.id} onClick={() => !tab.locked && setActiveTab(tab.id)} disabled={tab.locked} style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6px 12px',
          gap: '8px',
          backgroundColor: activeTab === tab.id ? 'rgba(252, 252, 253, 1)' : 'transparent',
          border: 'none',
          borderRadius: '6px',
          cursor: tab.locked ? 'not-allowed' : 'pointer',
          boxShadow: activeTab === tab.id ? '0px 0px 4px rgba(0, 0, 0, 0.15)' : 'none',
          transition: 'all 0.2s ease',
          opacity: tab.locked ? 0.5 : 1,
          outline: 'none'
        }}>
              {tab.locked && <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/a3254d17-7678-4b44-8465-63156fee9ccc.svg" alt="lock" style={{
            width: '16px',
            height: '16px'
          }} />}
              <span style={{
            color: activeTab === tab.id ? 'rgba(4, 97, 88, 1)' : 'rgba(252, 252, 253, 1)',
            fontSize: '14px',
            fontWeight: activeTab === tab.id ? 600 : 500,
            lineHeight: '20px',
            whiteSpace: 'nowrap'
          }}>
                {tab.label}
              </span>
            </button>)}
        </nav>

        <div className="user-panel" style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '24px'
      }}>
          <button className="notify-button" style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          position: 'relative',
          borderRadius: '6px',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s'
        }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/5eb25789-4960-4918-9177-45467190f34c.svg" alt="notifications" style={{
            width: '24px',
            height: '24px'
          }} />
            <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: 'rgba(229, 77, 46, 1)',
            borderRadius: '50%',
            position: 'absolute',
            right: '10px',
            top: '10px',
            border: '1.5px solid rgba(4, 97, 88, 1)'
          }} />
          </button>
          
          <div style={{
          width: '1px',
          height: '24px',
          backgroundColor: 'rgba(252, 252, 253, 0.25)'
        }} />
          
          <div className="user" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer'
        }}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
          }}>
              <span style={{
              color: 'rgba(252, 252, 253, 1)',
              fontSize: '14px',
              fontWeight: 600
            }}>Kerah Datto</span>
              <span style={{
              color: 'rgba(252, 252, 253, 0.7)',
              fontSize: '12px'
            }}>Gestor</span>
            </div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/4cacda6c-e396-4a1f-a26a-9034d605d3da.png" alt="Avatar" style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover'
            }} />
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/c593a87a-c1fa-430b-a442-7baa8ec471b2.svg" alt="chevron" style={{
              width: '20px',
              height: '20px'
            }} />
            </div>
          </div>
        </div>
      </header>

      <main style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'rgba(252, 252, 253, 1)',
      padding: '32px clamp(20px, 5vw, 80px)',
      boxSizing: 'border-box'
    }}>
        <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
          <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
            <div>
              <h1 style={{
              margin: 0,
              color: 'rgba(22, 26, 29, 1)',
              fontSize: '24px',
              fontWeight: 600,
              lineHeight: '30px'
            }}>
                Base cadastral do município
              </h1>
            </div>
            <button onClick={props.onCancel} onMouseEnter={() => setIsHoveredStop(true)} onMouseLeave={() => setIsHoveredStop(false)} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '6px 12px',
            gap: '6px',
            backgroundColor: isHoveredStop ? 'rgba(255, 220, 220, 1)' : 'rgba(255, 239, 239, 1)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/75a1291d-def1-4cb0-9b0e-f9c83c96c226.svg" alt="block" style={{
              width: '20px',
              height: '20px'
            }} />
              <span style={{
              color: 'rgba(198, 42, 47, 1)',
              fontSize: '14px',
              fontWeight: 500
            }}>Parar processamento</span>
            </button>
          </div>

          <section style={{
          width: '100%',
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 20px',
          gap: '40px',
          backgroundColor: 'rgba(252, 252, 253, 1)',
          border: '1px solid rgba(221, 221, 227, 1)',
          borderRadius: '8px',
          boxSizing: 'border-box'
        }}>
            <div style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
              <h2 style={{
              margin: 0,
              color: 'rgba(22, 26, 29, 1)',
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: '28px'
            }}>
                Estamos processando os dados da planilha enviada
              </h2>
              <p style={{
              margin: 0,
              color: 'rgba(77, 80, 86, 1)',
              fontSize: '12px',
              lineHeight: '16px'
            }}>
                Isso pode demorar um pouco, por favor aguarde
              </p>
            </div>

            <div style={{
            width: '100%',
            maxWidth: '354px',
            display: 'flex',
            alignItems: 'center',
            padding: '16px',
            gap: '24px',
            backgroundColor: 'rgba(242, 242, 245, 1)',
            borderRadius: '8px',
            boxSizing: 'border-box'
          }}>
              <div style={{
              width: '32px',
              height: '40px',
              position: 'relative',
              flexShrink: 0
            }}>
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/ab4533fe-49f1-42df-b84a-bd29a342a0bc.svg" alt="file-body" style={{
                width: '100%',
                height: '100%'
              }} />
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/58b3c43f-3fa2-42d6-94dd-5b446a22d4b1.svg" alt="file-lines" style={{
                position: 'absolute',
                left: '6px',
                top: '10px',
                width: '19px'
              }} />
                <div style={{
                position: 'absolute',
                left: '-4px',
                bottom: '4px',
                backgroundColor: 'rgba(4, 97, 88, 1)',
                borderRadius: '1px',
                padding: '0 4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '12px'
              }}>
                  <span style={{
                  color: 'white',
                  fontSize: '8px',
                  fontWeight: 700
                }}>PDF</span>
                </div>
              </div>
              
              <div style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minWidth: 0
            }}>
                <div style={{
                minWidth: 0
              }}>
                  <div style={{
                  color: 'rgba(22, 26, 29, 1)',
                  fontSize: '14px',
                  fontWeight: 500,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                    {props.fileName || 'Imóveis MS - 2026.pdf'}
                  </div>
                  <div style={{
                  color: 'rgba(77, 80, 86, 1)',
                  fontSize: '12px'
                }}>
                    18 MB - 07/11/2025 às 00:42
                  </div>
                </div>
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/852a7c73-3f2d-4625-9bab-90784b265c29.svg" alt="checked" style={{
                width: '24px',
                height: '24px',
                flexShrink: 0
              }} />
              </div>
            </div>

            <div style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '400px'
          }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/79911351-185b-4dba-b0e9-f756ad4d77b9.svg" alt="Loading Illustration" style={{
              width: '100%',
              height: 'auto',
              maxHeight: '326px'
            }} />
            </div>
          </section>
        </div>
      </main>
      
      <style>{`
        @media (max-width: 768px) {
          .navbar { height: auto !important; padding: 12px !important; flex-direction: column !important; gap: 16px !important; }
          .segmented-control { order: 3; max-width: 100% !important; margin: 0 !important; }
          .user-panel { width: 100% !important; justify-content: space-between !important; order: 2; }
          .loading-animation { height: auto !important; }
        }
      `}</style>
    </div>;
};
