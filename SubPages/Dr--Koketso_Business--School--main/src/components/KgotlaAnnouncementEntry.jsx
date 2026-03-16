import KgotlaAnnouncementModal from "./KgotlaAnnouncementModal";
import useSessionOnce from "../hooks/useSessionOnce";

export default function KgotlaAnnouncementEntry() {
  const { open, close } = useSessionOnce("bsle_kgotla_seen_v1");

  const basePath = import.meta.env.BASE_URL;
  const posters = Array.from({ length: 17 }, (_, i) => `${basePath}assets/Kgotla/Kgotla${i + 1}.jpg`);

  return (
    <KgotlaAnnouncementModal
      isOpen={open}
      onClose={close}
      posters={posters}
    />
  );
}
