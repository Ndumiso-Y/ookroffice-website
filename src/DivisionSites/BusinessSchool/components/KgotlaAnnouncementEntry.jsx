import KgotlaAnnouncementModal from "./KgotlaAnnouncementModal";
import useSessionOnce from "../hooks/useSessionOnce";

export default function KgotlaAnnouncementEntry() {
  const { open, close } = useSessionOnce("bsle_kgotla_seen_v1");

  // CRA uses process.env.PUBLIC_URL instead of Vite's import.meta.env.BASE_URL
  const basePath = process.env.PUBLIC_URL || '';
  const posters = Array.from({ length: 17 }, (_, i) => `${basePath}/division-assets/businessschool/Kgotla/Kgotla${i + 1}.jpg`);

  return (
    <KgotlaAnnouncementModal
      isOpen={open}
      onClose={close}
      posters={posters}
    />
  );
}
