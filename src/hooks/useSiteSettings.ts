import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type SiteSettings = {
  id: string;
  profile_image_url: string | null;
  resume_url: string | null;
  bio: string | null;
};

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    supabase
      .from("site_settings")
      .select("*")
      .order("updated_at", { ascending: false })
      .limit(1)
      .maybeSingle()
      .then(({ data }) => {
        if (mounted) {
          setSettings(data as SiteSettings | null);
          setLoading(false);
        }
      });
    return () => { mounted = false; };
  }, []);

  return { settings, loading };
};
