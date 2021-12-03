import { Container, Tab } from '../styles/components/BottomTab';
import { IoWalletOutline } from 'react-icons/io5'
import { GiKnifeFork } from 'react-icons/gi';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { AiOutlineBell } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import api from '../services/api';

const BottomTab: React.FC = () => {
  async function callWaiter() {
    const waitercall = {
      finished: false,
      table_id: tableId,
      establishment_id: establishmentId,
    }

    await api.post(`waitercalls`, waitercall);

    toast.success("O garçom do estabelecimento foi chamado!" , {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  const [tableId, setTableId] = useState(1);
  const [establishmentId, setEstablishmentId] = useState(1);

  useEffect(() => {
    setTableId(Number(localStorage.getItem('@cardappio/table')));
    setEstablishmentId(Number(localStorage.getItem('@cardappio/establishment')));
  }, [])

  return (
    <>
    <ToastContainer position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
    />
    <Container>
      <Tab>
        <Link href={`/table/${tableId}?table=${tableId}`}>
        <a>
          <IoWalletOutline color="#20B25D" size="1.5rem"/>
        </a>
        </Link>
        
      </Tab>
      <Tab>
        <Link href={`/establishment/${establishmentId}?table=${tableId}`}>
          <a>
            <GiKnifeFork color="#20B25D" size="1.5rem"/>
          </a>
        </Link>
      </Tab>
      <Tab>
        <Link href={`/orders/${tableId}?table=${tableId}`}>
          <a>
            <HiOutlineClipboardList color="#20B25D" size="1.6rem"/>
          </a>
        </Link>
      </Tab>
      <Tab>
        <AiOutlineBell color="#20B25D" size="1.6rem" onClick={callWaiter}/>
      </Tab>
    </Container>
    </>
  );
}

export default BottomTab;