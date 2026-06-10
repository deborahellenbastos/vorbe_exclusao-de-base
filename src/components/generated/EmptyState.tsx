import React, { useState, useEffect } from 'react';
import { LoadingAnimation } from './LoadingAnimation';
interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
interface EmptyStateProps extends BaseComponentProps {
  onUploadComplete?: () => void;
}
interface StepBaseLineProps {
  className?: string;
  style?: React.CSSProperties;
}
const StepBaseLine = (props: StepBaseLineProps) => {
  return <div className={`step-base-line ${props.className || ''}`.trim()} style={{
    width: '2px',
    height: '72px',
    backgroundColor: 'rgba(33, 99, 45, 1)',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
    ...props.style
  }} />;
};
export const EmptyState = (props: EmptyStateProps) => {
  const [activeTab, setActiveTab] = useState('base');
  const [showToast, setShowToast] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer: any;
    if (isLoading) {
      timer = setTimeout(() => {
        if (props.onUploadComplete) {
          props.onUploadComplete();
        } else {
          setIsLoading(false);
        }
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isLoading, props.onUploadComplete]);

  const handleTabClick = (tab: string) => {
    if (tab !== 'simulador') {
      setActiveTab(tab);
    }
  };
  const buttonHoverStyle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.filter = 'brightness(0.95)';
  };
  const buttonResetStyle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.filter = 'none';
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      setIsLoading(true);
    }
  };

  if (isLoading) {
    return <LoadingAnimation fileName={fileName} onCancel={() => setIsLoading(false)} />;
  }

  return <div className={`empty-state ${props.className || ''}`.trim()} style={{
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(252, 252, 253, 1)',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
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
      zIndex: 10,
      position: 'relative'
    }}>
        <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center'
      }}>
          <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/b1122929-5f20-4e14-8cc0-c9f857c1d581.svg" alt="Vorbe" style={{
          height: '32px',
          width: 'auto',
          cursor: 'pointer'
        }} />
        </div>

        <nav className="segmented-control" style={{
        width: '640px',
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '4px',
        gap: '4px',
        backgroundColor: 'rgba(242, 242, 245, 0.1)',
        boxSizing: 'border-box',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
          <button onClick={() => handleTabClick('base')} style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6px 12px',
          backgroundColor: activeTab === 'base' ? 'rgba(252, 252, 253, 1)' : 'transparent',
          boxShadow: activeTab === 'base' ? '0px 0px 4px rgba(0, 0, 0, 0.15)' : 'none',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}>
            <span style={{
            color: activeTab === 'base' ? 'rgba(4, 97, 88, 1)' : 'rgba(252, 252, 253, 1)',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: activeTab === 'base' ? 600 : 500
          }}>
              Base cadastral
            </span>
          </button>

          <button onClick={() => handleTabClick('motor')} style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6px 12px',
          backgroundColor: activeTab === 'motor' ? 'rgba(252, 252, 253, 1)' : 'transparent',
          boxShadow: activeTab === 'motor' ? '0px 0px 4px rgba(0, 0, 0, 0.15)' : 'none',
          borderRadius: '6px',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}>
            <span style={{
            color: activeTab === 'motor' ? 'rgba(4, 97, 88, 1)' : 'rgba(252, 252, 253, 1)',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: activeTab === 'motor' ? 600 : 500
          }}>
              Motor de cálculo
            </span>
          </button>

          <button disabled style={{
          flex: 1,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '6px 12px',
          backgroundColor: 'transparent',
          borderRadius: '6px',
          border: 'none',
          cursor: 'not-allowed',
          opacity: 0.5,
          gap: '8px'
        }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/f85dfde9-ae08-422b-b2d2-cae6935abf8b.svg" alt="lock" style={{
            width: '16px',
            height: '16px'
          }} />
            <span style={{
            color: 'rgba(252, 252, 253, 1)',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600
          }}>
              Simulador
            </span>
          </button>
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
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
          transition: 'background-color 0.2s'
        }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/10518466-3a49-428e-a588-f71ef2de1689.svg" alt="notifications" style={{
            width: '24px',
            height: '24px'
          }} />
            <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: 'rgba(229, 77, 46, 1)',
            borderRadius: '50%',
            position: 'absolute',
            right: '8px',
            top: '8px',
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
            textAlign: 'right'
          }}>
              <div style={{
              color: 'rgba(252, 252, 253, 1)',
              fontSize: '14px',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 600,
              lineHeight: '20px'
            }}>Kerah Datto</div>
              <div style={{
              color: 'rgba(252, 252, 253, 0.7)',
              fontSize: '12px',
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              lineHeight: '16px'
            }}>Gestor</div>
            </div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
              <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: 'rgba(199, 235, 229, 1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                <span style={{
                color: 'rgba(4, 97, 88, 1)',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500
              }}>S</span>
              </div>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/02d2950a-8075-4c43-931e-5709b7ebf02c.svg" alt="chevron" style={{
              width: '16px',
              height: '16px'
            }} />
            </div>
          </div>
        </div>
      </header>

      <main style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'rgba(252, 252, 253, 1)',
      position: 'relative'
    }}>
        <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 80px',
        gap: '24px',
        overflowY: 'auto'
      }}>
          <div className="title-and-actions" style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
            <h1 style={{
            margin: 0,
            color: 'rgba(22, 26, 29, 1)',
            fontSize: '24px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 600,
            lineHeight: '30px'
          }}>
              Base cadastral do município
            </h1>
            <div style={{
            display: 'flex',
            gap: '12px'
          }}>
              <button onMouseEnter={buttonHoverStyle} onMouseLeave={buttonResetStyle} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: 'rgba(249, 249, 251, 1)',
              border: '1px solid rgba(221, 221, 227, 1)',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}>
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/50c28b54-7b88-46c8-9242-c3c38a3ed463.svg" alt="download" style={{
                width: '18px',
                height: '18px'
              }} />
                <span style={{
                color: 'rgba(77, 80, 86, 1)',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500
              }}>Baixar modelo</span>
              </button>
              
              <input 
                type="file" 
                id="file-upload" 
                style={{ display: 'none' }} 
                accept=".pdf,.xlsx,.csv" 
                onChange={handleFileUpload} 
              />
              <button onClick={() => document.getElementById('file-upload')?.click()} onMouseEnter={buttonHoverStyle} onMouseLeave={buttonResetStyle} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: 'rgba(4, 97, 88, 1)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}>
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/ce0cf4e6-918a-4875-b15f-4be70b912fd7.svg" alt="upload" style={{
                width: '18px',
                height: '18px'
              }} />
                <span style={{
                color: 'rgba(252, 252, 253, 1)',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500
              }}>Upload de arquivo</span>
              </button>
            </div>
          </div>

          <div style={{
          display: 'flex',
          gap: '24px',
          flex: 1
        }}>
            <div style={{
            width: '360px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
              <div style={{
              border: '1px solid rgba(175, 223, 215, 1)',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#fff'
            }}>
                <div style={{
                padding: '16px 24px',
                backgroundColor: 'rgba(231, 249, 245, 1)',
                borderBottom: '1px solid rgba(175, 223, 215, 1)'
              }}>
                  <div style={{
                  color: 'rgba(13, 61, 56, 1)',
                  fontSize: '16px',
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 600,
                  marginBottom: '4px'
                }}>Como começar</div>
                  <div style={{
                  color: 'rgba(13, 61, 56, 0.8)',
                  fontSize: '14px',
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: '20px'
                }}>
                    Siga as etapas abaixo para configurar o sistema e habilitar os módulos avançados.
                  </div>
                </div>
                <div style={{
                padding: '24px'
              }}>
                  <div style={{
                  display: 'flex',
                  flexDirection: 'column'
                }}>
                    {/* Step 1 */}
                    <div style={{
                    display: 'flex',
                    gap: '12px'
                  }}>
                      <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                        <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid rgba(4, 97, 88, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        color: 'rgba(4, 97, 88, 1)',
                        fontWeight: 600
                      }}>1</div>
                        <StepBaseLine />
                      </div>
                      <div style={{
                      paddingTop: '8px'
                    }}>
                        <div style={{
                        color: 'rgba(22, 26, 29, 1)',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginBottom: '4px'
                      }}>Baixe o modelo de planilha</div>
                        <div style={{
                        color: 'rgba(77, 80, 86, 1)',
                        fontSize: '14px',
                        lineHeight: '20px'
                      }}>Utilize o modelo oficial para garantir compatibilidade com o sistema.</div>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div style={{
                    display: 'flex',
                    gap: '12px'
                  }}>
                      <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                        <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid rgba(33, 99, 45, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        color: 'rgba(33, 99, 45, 1)',
                        fontWeight: 600
                      }}>2</div>
                        <StepBaseLine />
                      </div>
                      <div style={{
                      paddingTop: '8px'
                    }}>
                        <div style={{
                        color: 'rgba(22, 26, 29, 1)',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginBottom: '4px'
                      }}>Realize o upload</div>
                        <div style={{
                        color: 'rgba(97, 99, 107, 1)',
                        fontSize: '14px',
                        lineHeight: '20px'
                      }}>Envie a planilha preenchida seguindo o modelo repassado.</div>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div style={{
                    display: 'flex',
                    gap: '12px'
                  }}>
                      <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}>
                        <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '2px solid rgba(33, 99, 45, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fff',
                        color: 'rgba(33, 99, 45, 1)',
                        fontWeight: 600
                      }}>3</div>
                      </div>
                      <div style={{
                      paddingTop: '8px'
                    }}>
                        <div style={{
                        color: 'rgba(22, 26, 29, 1)',
                        fontSize: '14px',
                        fontWeight: 600,
                        marginBottom: '4px'
                      }}>Validação dos dados</div>
                        <div style={{
                        color: 'rgba(97, 99, 107, 1)',
                        fontSize: '14px',
                        lineHeight: '20px'
                      }}>Corrija pendências de dados que possam existir na planilha.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{
              backgroundColor: 'rgba(255, 249, 237, 1)',
              border: '1px solid rgba(245, 208, 140, 1)',
              borderRadius: '6px',
              padding: '12px'
            }}>
                <p style={{
                margin: 0,
                color: 'rgba(145, 89, 48, 1)',
                fontSize: '14px',
                fontFamily: '"Inter", sans-serif',
                fontWeight: 500,
                lineHeight: '20px',
                textAlign: 'center'
              }}>
                  O módulo Simulador será desbloqueado após conclusão das pendências na base cadastral.
                </p>
              </div>
            </div>

            <div style={{
            flex: 1,
            border: '1px solid rgba(221, 221, 227, 1)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px'
          }}>
              <div style={{
              maxWidth: '352px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }}>
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/d4e12f17-a49b-4819-a214-60513a35d8f8.svg" alt="Empty state illustration" style={{
                width: '185px',
                height: 'auto'
              }} />
                <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                  <div style={{
                  color: 'rgba(22, 26, 29, 1)',
                  fontSize: '16px',
                  fontWeight: 600
                }}>Nenhum dado importado</div>
                  <div style={{
                  color: 'rgba(77, 80, 86, 1)',
                  fontSize: '14px',
                  lineHeight: '20px'
                }}>Inicie o processo subindo o arquivo da base cadastral fornecida pela prefeitura.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {showToast && <div className="toast" style={{
      position: 'fixed',
      bottom: '40px',
      right: '40px',
      width: '349px',
      backgroundColor: 'rgba(231, 249, 245, 1)',
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
      borderRadius: '6px',
      overflow: 'hidden',
      zIndex: 100,
      animation: 'slideIn 0.3s ease-out'
    }}>
          <style>
            {`
              @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
              }
              @keyframes timerProgress {
                from { width: 100%; }
                to { width: 0%; }
              }
            `}
          </style>
          <div style={{
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/4a4a9923-26a5-4312-9e50-dd70081954ef.svg" alt="Success" style={{
          width: '20px',
          height: '20px'
        }} />
            <span style={{
          color: 'rgba(8, 38, 35, 1)',
          fontSize: '15px',
          fontWeight: 400
        }}>Base cadastral excluída com sucesso.</span>
          </div>
          <div style={{
        height: '4px',
        backgroundColor: 'rgba(14, 152, 136, 1)',
        animation: 'timerProgress 5s linear forwards'
      }} />
        </div>}
    </div>;
};
