
-- Restrict listing: only allow read of known filenames
DROP POLICY "Public read portfolio assets" ON storage.objects;
CREATE POLICY "Public read specific portfolio files" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'portfolio-assets'
    AND (storage.filename(name) IN ('resume.pdf', 'profile.jpg', 'profile.png', 'profile.webp'))
  );

REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
