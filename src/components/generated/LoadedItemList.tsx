import React, { useState } from 'react';
import { EmptyState } from './EmptyState';
interface LoadedItemListProps {
  className?: string;
  style?: React.CSSProperties;
}
const Caption = ({
  color,
  children,
  width
}: {
  color: string;
  children: React.ReactNode;
  width?: string;
}) => <span style={{
  width: width || 'auto',
  height: '20px',
  color,
  boxSizing: 'content-box',
  fontSize: '14px',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 400,
  lineHeight: '20px',
  letterSpacing: '0px',
  textAlign: 'left',
  position: 'relative'
}}>
    {children}
  </span>;
const KPIItem = ({
  icon,
  label,
  value,
  color,
  labelColor
}: {
  icon: string;
  label: string;
  value: string;
  color?: string;
  labelColor?: string;
}) => <div style={{
  height: '80px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '24px',
  gap: '8px',
  backgroundColor: 'rgba(252, 252, 253, 1)',
  borderColor: 'rgba(221, 221, 227, 1)',
  borderStyle: 'solid',
  borderWidth: '1px',
  boxSizing: 'border-box',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  borderRadius: '8px',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '0',
  minWidth: '0'
}}>
    <div style={{
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    boxSizing: 'border-box',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0',
    minWidth: '0'
  }}>
      <div style={{
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      boxSizing: 'border-box',
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '0',
      minWidth: '0'
    }}>
        <img src={icon} alt={label} style={{
        width: '16px',
        height: '16px',
        boxSizing: 'border-box'
      }} />
        <span style={{
        width: 'auto',
        height: 'auto',
        color: labelColor || 'rgba(77, 80, 86, 1)',
        boxSizing: 'content-box',
        fontSize: '14px',
        fontFamily: '"Inter", sans-serif',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0px',
        textAlign: 'left',
        flexShrink: 0
      }}>{label}</span>
      </div>
    </div>
    <div style={{
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '37.86px',
    boxSizing: 'border-box',
    flexShrink: 0
  }}>
      <div style={{
      width: 'auto',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      flexShrink: 0
    }}>
        <span style={{
        width: 'auto',
        height: 'auto',
        color: color || 'rgba(22, 26, 29, 1)',
        boxSizing: 'content-box',
        fontSize: '28px',
        fontFamily: '"Inter", sans-serif',
        fontWeight: 700,
        lineHeight: '35px',
        letterSpacing: '0px',
        textAlign: 'left',
        flexShrink: 0
      }}>{value}</span>
      </div>
    </div>
  </div>;
export const LoadedItemList = (props: LoadedItemListProps) => {
  const [activeTab, setActiveTab] = useState('base');
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationText, setConfirmationText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [showUploadSuccessToast, setShowUploadSuccessToast] = useState(false);
  
  const isDeleteEnabled = confirmationText === 'EXCLUIR';
  const handleClose = () => {
    setIsModalOpen(false);
    setConfirmationText('');
  };
  const handleDelete = () => {
    if (isDeleteEnabled) {
      console.log('Base deleted');
      setIsModalOpen(false);
      setConfirmationText('');
      setIsDeleted(true);
    }
  };
  
  const handleUploadComplete = () => {
    setIsDeleted(false);
    setShowUploadSuccessToast(true);
    setTimeout(() => {
      setShowUploadSuccessToast(false);
    }, 5000);
  };
  
  if (isDeleted) {
    return <EmptyState onUploadComplete={handleUploadComplete} />;
  }
  
  const tableData = [{
    status: 'Pendência',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/d8739441-f442-44da-a5c2-82e4f989be5b.svg',
    matricula: '-',
    endereco: 'Avenida do Sol, 5678',
    classImovel: 'Comercial',
    classRenda: 'Usuário normal',
    taxa: 'Indefinido'
  }, {
    status: 'Pendência',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/e9c72a15-89b8-4f0c-ae10-9bbafd0537ce.svg',
    matricula: '12345678',
    endereco: 'Travessa da Esperança, 1718',
    classImovel: 'Residencial',
    classRenda: 'Isento/Sanesul',
    taxa: 'Indefinido'
  }, {
    status: 'Pendência',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/076f117f-6db9-4019-b9b7-8b1b636b5ad1.svg',
    matricula: '23456789',
    endereco: 'Rua do Horizonte, 2324',
    classImovel: '-',
    classRenda: 'Classe Tarifa Social - Entidade Filantrópica',
    taxa: 'Indefinido'
  }, {
    status: 'Íntegro',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/177d795a-e389-439d-b7e8-0e250b5c710c.svg',
    matricula: '34567891',
    endereco: 'Rua das Flores, 1234',
    classImovel: 'Residencial',
    classRenda: 'Usuário normal',
    taxa: 'Indefinido'
  }, {
    status: 'Íntegro',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/84477b2d-4d28-4bf9-b4b4-91d84db7a87f.svg',
    matricula: '45678912',
    endereco: 'Travessa da Lua, 910',
    classImovel: 'Residencial',
    classRenda: 'Classe Tarifa Social - Baixa Renda - Residência',
    taxa: 'Indefinido'
  }, {
    status: 'Íntegro',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/d2504a38-c51a-4754-91ea-5e61f947e949.svg',
    matricula: '56789123',
    endereco: 'Rua do Mar, 1112',
    classImovel: 'Comercial',
    classRenda: 'Usuário normal',
    taxa: 'Indefinido'
  }, {
    status: 'Íntegro',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/8c88d5a9-e927-4d57-9df0-7e274c757570.svg',
    matricula: '67891234',
    endereco: 'Avenida das Estrelas, 1314',
    classImovel: 'Industrial, Residencial, +2',
    classRenda: 'Usuário normal',
    taxa: 'Indefinido'
  }, {
    status: 'Íntegro',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/4af276ec-95ac-4821-9892-1456a47f2341.svg',
    matricula: '78912345',
    endereco: 'Rua do Vento, 1516',
    classImovel: 'Público, Residencial',
    classRenda: 'Usuário normal',
    taxa: 'Indefinido'
  }, {
    status: 'Íntegro',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/c74a8071-5046-4fc7-a64e-96eb9706177e.svg',
    matricula: '89123456',
    endereco: 'Rua da Amizade, 1920',
    classImovel: 'Público',
    classRenda: 'Classe Tarifa Social - Entidade Filantrópica',
    taxa: 'Indefinido'
  }, {
    status: 'Íntegro',
    icon: 'https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/80e01e6a-bdee-45c3-ac5f-34435731258c.svg',
    matricula: '91234567',
    endereco: 'Avenida da Liberdade, 2122',
    classImovel: 'Residencial',
    classRenda: 'Usuário normal',
    taxa: 'Indefinido'
  }];
  return <div className="listagem-carregada" style={{
    width: '100%',
    minWidth: '1440px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(252, 252, 253, 1)',
    ...props.style
  }}>
      <header style={{
      width: '100%',
      height: '64px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 24px',
      backgroundColor: 'rgba(4, 97, 88, 1)',
      boxSizing: 'border-box'
    }}>
        <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/f4bf37cb-4fd1-4e91-80eb-95ebd9b31ad3.svg" alt="Vorbe" style={{
        height: '32px',
        cursor: 'pointer'
      }} />
        
        <nav style={{
        width: '640px',
        display: 'flex',
        padding: '4px',
        gap: '4px',
        backgroundColor: 'rgba(242, 242, 245, 0.1)',
        borderRadius: '8px'
      }}>
          {[{
          id: 'base',
          label: 'Base cadastral',
          locked: false
        }, {
          id: 'motor',
          label: 'Motor de cálculo',
          locked: false
        }, {
          id: 'simulador',
          label: 'Simulador',
          locked: true
        }].map(item => <button key={item.id} onClick={() => !item.locked && setActiveTab(item.id)} disabled={item.locked} style={{
          flex: 1,
          height: '32px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          border: 'none',
          borderRadius: '6px',
          cursor: item.locked ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease',
          backgroundColor: activeTab === item.id ? 'rgba(252, 252, 253, 1)' : 'transparent',
          boxShadow: activeTab === item.id ? '0px 0px 4px rgba(0, 0, 0, 0.15)' : 'none',
          opacity: item.locked ? 0.5 : 1
        }}>
              {item.locked && <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/5526db09-f031-4c38-986d-a0f7af960151.svg" alt="lock" style={{
            width: '20px'
          }} />}
              <span style={{
            color: activeTab === item.id ? 'rgba(4, 97, 88, 1)' : 'rgba(252, 252, 253, 1)',
            fontSize: '14px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: activeTab === item.id ? 600 : 500
          }}>
                {item.label}
              </span>
            </button>)}
        </nav>

        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px'
      }}>
          <button style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          position: 'relative'
        }}>
            <div style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '6px'
          }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/725387f6-3303-43c5-bc89-3d25c91c454d.svg" alt="notifications" />
              <div style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(229, 77, 46, 1)',
              borderRadius: '50%',
              position: 'absolute',
              right: '10px',
              top: '10px'
            }} />
            </div>
          </button>
          <div style={{
          width: '1px',
          height: '24px',
          backgroundColor: 'rgba(252, 252, 253, 0.25)'
        }} />
          <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer'
        }}>
            <div style={{
            textAlign: 'right'
          }}>
              <div style={{
              color: 'rgba(252, 252, 253, 1)',
              fontSize: '14px',
              fontWeight: 600,
              fontFamily: 'Inter'
            }}>Kerah Datto</div>
              <div style={{
              color: 'rgba(252, 252, 253, 0.7)',
              fontSize: '12px',
              fontFamily: 'Inter'
            }}>Gestor</div>
            </div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/78d59dfb-e634-4cfb-bdb0-02e28bdc734c.png" alt="Avatar" style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover'
            }} />
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/456fe5cd-3fbc-4a61-9d5b-3e867dba242e.svg" alt="chevron" style={{
              width: '20px'
            }} />
            </div>
          </button>
        </div>
      </header>

      <main style={{
      padding: '32px 80px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <h1 style={{
        margin: 0,
        color: 'rgba(22, 26, 29, 1)',
        fontSize: '24px',
        fontWeight: 600,
        fontFamily: 'Inter'
      }}>
          Base cadastral do município
        </h1>

        <section style={{
        display: 'flex',
        gap: '24px'
      }}>
          <KPIItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/cb7d886e-ad75-4bd5-b150-9f3a1cf1bb07.svg" label="Total de imóveis" value="12.450" />
          <KPIItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/118904d6-f1a6-4229-b48a-d8877db57f37.svg" label="Imóvel com pendência" value="3" color="rgba(198, 42, 47, 1)" labelColor="rgba(198, 42, 47, 1)" />
          <KPIItem icon="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/490a6379-412a-4768-b398-b862d8c1a8e9.svg" label="Imóveis isentos" value="5.786" />
        </section>

        <section style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <div style={{
          position: 'relative',
          width: '560px'
        }}>
            <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/54f4ea2b-9129-42e9-a41b-861cc46e2dc6.svg" alt="search" style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '16px'
          }} />
            <input type="text" placeholder="Buscar por matrícula ou endereço do imóvel" value={search} onChange={e => setSearch(e.target.value)} style={{
            width: '100%',
            height: '32px',
            padding: '0 12px 0 36px',
            backgroundColor: 'rgba(249, 249, 251, 1)',
            border: '1px solid rgba(221, 221, 227, 1)',
            borderRadius: '4px',
            fontSize: '14px',
            fontFamily: 'Inter',
            outline: 'none'
          }} />
          </div>
          <div style={{
          display: 'flex',
          gap: '6px'
        }}>
            <button onClick={() => setIsModalOpen(true)} style={{
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '0 10px',
            background: 'none',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'rgba(198, 42, 47, 1)',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'Inter'
          }} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(198, 42, 47, 0.05)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/d1d5c4e6-b897-48f6-93da-afe33807691b.svg" alt="trash" /> Excluir base
            </button>
            <button style={{
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '0 10px',
            backgroundColor: '#FFF',
            border: '1px solid rgba(221, 221, 227, 1)',
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'rgba(77, 80, 86, 1)',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'Inter'
          }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/5e24766f-b142-4a64-871f-1ee62e79a84b.svg" alt="filter" /> Filtrar
            </button>
            <button style={{
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '0 10px',
            backgroundColor: '#FFF',
            border: '1px solid rgba(221, 221, 227, 1)',
            borderRadius: '4px',
            cursor: 'pointer',
            color: 'rgba(77, 80, 86, 1)',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'Inter'
          }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/4950a2c4-eef5-4d85-a906-099d6338991c.svg" alt="export" /> Exportar
            </button>
          </div>
        </section>

        <section style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid rgba(221, 221, 227, 1)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
          <div style={{
          display: 'flex',
          background: 'rgba(249, 249, 251, 1)',
          borderBottom: '1px solid rgba(221, 221, 227, 1)'
        }}>
            <div style={{
            width: '160px',
            padding: '10px 16px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'rgba(77, 80, 86, 1)',
            fontFamily: 'Inter'
          }}>Status</div>
            <div style={{
            width: '140px',
            padding: '10px 16px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)',
            fontSize: '14px',
            fontWeight: 600,
            color: 'rgba(77, 80, 86, 1)',
            fontFamily: 'Inter'
          }}>Matrícula</div>
            <div style={{
            flex: 1,
            padding: '10px 16px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)',
            fontSize: '14px',
            fontWeight: 600,
            color: 'rgba(77, 80, 86, 1)',
            fontFamily: 'Inter'
          }}>Endereço</div>
            <div style={{
            width: '242px',
            padding: '10px 16px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)',
            fontSize: '14px',
            fontWeight: 600,
            color: 'rgba(77, 80, 86, 1)',
            fontFamily: 'Inter'
          }}>Classificação do imóvel</div>
            <div style={{
            width: '351px',
            padding: '10px 16px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)',
            fontSize: '14px',
            fontWeight: 600,
            color: 'rgba(77, 80, 86, 1)',
            fontFamily: 'Inter'
          }}>Classificação de renda</div>
            <div style={{
            width: '120px',
            padding: '10px 16px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)',
            fontSize: '14px',
            fontWeight: 600,
            color: 'rgba(77, 80, 86, 1)',
            fontFamily: 'Inter'
          }}>Valor taxa</div>
            <div style={{
            width: '40px',
            padding: '10px 16px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)'
          }} />
          </div>

          {tableData.map((row, idx) => <div key={idx} style={{
          display: 'flex',
          background: '#FFF',
          borderBottom: '1px solid rgba(221, 221, 227, 1)',
          transition: 'background 0.2s'
        }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F9F9FB'} onMouseLeave={e => e.currentTarget.style.backgroundColor = '#FFF'}>
              <div style={{
            width: '160px',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
                <img src={row.icon} alt="status" style={{
              width: '20px'
            }} />
                <Caption color={row.status === 'Pendência' ? 'rgba(198, 42, 47, 1)' : 'rgba(13, 61, 56, 1)'}>{row.status}</Caption>
              </div>
              <div style={{
            width: '140px',
            padding: '10px 16px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)',
            display: 'flex',
            alignItems: 'center'
          }}>
                <Caption color="rgba(77, 80, 86, 1)">{row.matricula}</Caption>
              </div>
              <div style={{
            flex: 1,
            padding: '10px 16px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)',
            display: 'flex',
            alignItems: 'center'
          }}>
                <Caption color="rgba(77, 80, 86, 1)">{row.endereco}</Caption>
              </div>
              <div style={{
            width: '242px',
            padding: '10px 16px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
                <Caption color="rgba(77, 80, 86, 1)">{row.classImovel.split(', +')[0]}</Caption>
                {row.classImovel.includes('+2') && <div style={{
              backgroundColor: 'rgba(228, 228, 233, 1)',
              padding: '2px 6px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 500,
              fontFamily: 'Inter'
            }}>+2</div>}
              </div>
              <div style={{
            width: '351px',
            padding: '10px 16px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)',
            display: 'flex',
            alignItems: 'center'
          }}>
                <Caption color="rgba(77, 80, 86, 1)">{row.classRenda}</Caption>
              </div>
              <div style={{
            width: '120px',
            padding: '10px 16px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)',
            display: 'flex',
            alignItems: 'center'
          }}>
                <Caption color="rgba(77, 80, 86, 1)">{row.taxa}</Caption>
              </div>
              <div style={{
            width: '40px',
            padding: '4px',
            borderLeft: '1px solid rgba(221, 221, 227, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
                <button style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '4px'
            }} onMouseEnter={e => e.currentTarget.style.backgroundColor = '#E4E4E9'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/fdcff4a4-5356-471d-a6c4-99b4dd55fdfe.svg" alt="detail" style={{
                width: '20px'
              }} />
                </button>
              </div>
            </div>)}
        </section>

        <footer style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '-8px'
      }}>
          <span style={{
          fontSize: '14px',
          color: 'rgba(77, 80, 86, 1)',
          fontFamily: 'Inter'
        }}>
            Mostrando <strong style={{ color: 'rgba(22, 26, 29, 1)', fontWeight: 700 }}>10</strong> de <strong style={{ color: 'rgba(22, 26, 29, 1)', fontWeight: 700 }}>12.450</strong> resultados
          </span>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px'
        }}>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
              <span style={{
              fontSize: '14px',
              color: 'rgba(77, 80, 86, 1)',
              fontFamily: 'Inter'
            }}>Linhas por página</span>
              <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0 8px',
              height: '32px',
              backgroundColor: 'rgba(249, 249, 251, 1)',
              border: '1px solid rgba(221, 221, 227, 1)',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
                <span style={{
                fontSize: '14px',
                fontWeight: 500
              }}>10</span>
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/a3b56e73-2d51-4cca-8865-0e83731218cb.svg" alt="chevron" style={{
                width: '20px'
              }} />
              </div>
            </div>
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
              <span style={{
              fontSize: '14px',
              color: 'rgba(22, 26, 29, 1)',
              fontFamily: 'Inter'
            }}>Página 1 de 56</span>
              <div style={{
              display: 'flex',
              border: '1px solid rgba(221, 221, 227, 1)',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
                <button style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                background: '#FFF',
                cursor: 'pointer',
                borderRight: '1px solid rgba(221, 221, 227, 1)'
              }}>
                  <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/c6493bce-6519-42c8-8eda-64a089017093.svg" alt="first" style={{
                  width: '12px'
                }} />
                </button>
                <button style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                background: '#FFF',
                cursor: 'pointer',
                borderRight: '1px solid rgba(221, 221, 227, 1)'
              }}>
                  <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/cdb32094-f241-4be2-98b5-9d4ba22bbdb2.svg" alt="prev" style={{
                  width: '12px'
                }} />
                </button>
                <button style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                background: '#FFF',
                cursor: 'pointer',
                borderRight: '1px solid rgba(221, 221, 227, 1)'
              }}>
                  <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/e723b46c-8edd-44d4-b266-7d7eedd3ab74.svg" alt="next" style={{
                  width: '12px'
                }} />
                </button>
                <button style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                background: '#FFF',
                cursor: 'pointer'
              }}>
                  <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/1d942707-41be-429e-b4e3-56a8b0785300.svg" alt="last" style={{
                  width: '12px'
                }} />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Modal Overlay */}
      {isModalOpen && <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
          <div style={{
        width: '480px',
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.25)',
        position: 'relative'
      }}>
            
            {/* Modal Header/Content */}
            <div style={{
          padding: '24px',
          background: 'linear-gradient(180deg, rgba(255, 239, 239, 1) 0%, rgba(252, 252, 253, 1) 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}>
              <div style={{
            width: '56px',
            height: '56px',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
                <div style={{
              width: '56px',
              height: '56px',
              backgroundColor: 'rgba(255, 239, 239, 1)',
              borderRadius: '50%',
              position: 'absolute'
            }} />
                <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(253, 216, 216, 1)',
              borderRadius: '50%',
              position: 'absolute'
            }} />
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/77a87141-fb8e-4e11-a63c-9bc7edc2fee7.svg" alt="trash" style={{
              width: '24px',
              zIndex: 1
            }} />
              </div>
              
              <div style={{
            textAlign: 'center',
            gap: '8px',
            display: 'flex',
            flexDirection: 'column'
          }}>
                <h2 style={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'rgba(22, 26, 29, 1)',
              margin: 0,
              fontFamily: '"Inter", sans-serif'
            }}>Excluir base cadastral atual?</h2>
                <p style={{
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              color: 'rgba(77, 80, 86, 1)',
              margin: 0,
              fontFamily: '"Inter", sans-serif'
            }}>
                  Você está prestes a excluir permanentemente todos os imóveis importados da base atual. <span style={{ fontWeight: 600 }}>As configurações gerais e os parâmetros de cálculo não serão afetados.</span>
                </p>
              </div>

              {/* Warning Callout */}
              <div style={{
            backgroundColor: 'rgba(255, 249, 237, 1)',
            border: '1px solid rgba(245, 208, 140, 1)',
            borderRadius: '6px',
            padding: '10px',
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-start'
          }}>
                <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/ce4f2981-c57b-4fa0-8cd7-b0dca1a7bf8c.svg" alt="warning" style={{
              width: '16px',
              marginTop: '2px'
            }} />
                <span style={{
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(145, 89, 48, 1)',
              lineHeight: '20px',
              fontFamily: '"Inter", sans-serif'
            }}>
                  <span style={{ fontWeight: 600 }}>Atenção:</span> Caso exista uma simulação vigente utilizando esta base, ela retornará ao status de “não aplicada”.
                </span>
              </div>

              {/* Confirmation Input */}
              <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
                <label style={{
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(22, 26, 29, 1)',
              fontFamily: '"Inter", sans-serif'
            }}>
                  Para confirmar a exclusão, digite a palavra <span style={{ fontWeight: 600 }}>EXCLUIR</span> abaixo:
                </label>
                <input type="text" value={confirmationText} onChange={e => setConfirmationText(e.target.value)} onFocus={() => setIsInputFocused(true)} onBlur={() => setIsInputFocused(false)} style={{
              height: '32px',
              padding: '0 8px',
              backgroundColor: 'rgba(249, 249, 251, 1)',
              border: isInputFocused ? '2px solid #53B9AB' : '1px solid rgba(221, 221, 227, 1)',
              borderRadius: '4px',
              outline: 'none',
              fontFamily: '"Inter", sans-serif'
            }} />
              </div>
            </div>

            {/* Modal Footer */}
            <footer style={{
          padding: '24px',
          borderTop: '1px solid rgba(221, 221, 227, 1)',
          display: 'flex',
          gap: '12px'
        }}>
              <button onClick={handleClose} style={{
            flex: 1,
            height: '40px',
            backgroundColor: 'white',
            border: '1px solid rgba(221, 221, 227, 1)',
            borderRadius: '6px',
            color: 'rgba(77, 80, 86, 1)',
            fontWeight: 500,
            fontSize: '16px',
            cursor: 'pointer',
            fontFamily: '"Inter", sans-serif'
          }}>
                Fechar
              </button>
              <button onClick={handleDelete} disabled={!isDeleteEnabled} style={{
            flex: 1,
            height: '40px',
            backgroundColor: isDeleteEnabled ? 'rgba(198, 42, 47, 1)' : 'rgba(242, 242, 245, 1)',
            border: 'none',
            borderRadius: '6px',
            color: isDeleteEnabled ? 'white' : 'rgba(139, 141, 152, 1)',
            fontWeight: 500,
            fontSize: '16px',
            cursor: isDeleteEnabled ? 'pointer' : 'not-allowed',
            transition: 'background-color 0.2s',
            fontFamily: '"Inter", sans-serif'
          }}>
                Excluir base
              </button>
            </footer>

            {/* Close X Button */}
            <button onClick={handleClose} style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0
        }}>
              <img src="https://storage.googleapis.com/storage.magicpath.ai/user/396087310556483584/figma-assets/2a79e589-b62f-48df-ba72-a42a445e1503.svg" alt="close" style={{
            width: '24px'
          }} />
            </button>
          </div>
        </div>}

      {showUploadSuccessToast && <div className="toast" style={{
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
        }}>Dados carregados com sucesso.</span>
          </div>
          <div style={{
        height: '4px',
        backgroundColor: 'rgba(14, 152, 136, 1)',
        animation: 'timerProgress 5s linear forwards'
      }} />
        </div>}

    </div>;
};